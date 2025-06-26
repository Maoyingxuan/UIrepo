import { WatermarkProps } from "FCB-ui";
import React, { useEffect, useRef } from "react";
import { Children } from "react"
import useWatermark, { FontGap } from "./hooks/useWatermark";
import getClips from "./hooks/getClips";
import { getPixelRatio, reRendering } from "./utils";
import useRafDebounce from "./hooks/useRafDebounce";
import { useWatermarkStyles } from "./useWatermarkStyles.styles";
import useMutateObserver from "./hooks/useMutateObserver";

export const Watermark: React.FC<WatermarkProps> = (props) => {
    const {
        zIndex = 9,
        rotate = -22,
        width,
        height,
        image,
        content,
        font = {},
        style,
        className,
        gap = [100, 100],
        offset,
        children,
    } = props;
      const {
        color = "rgba(0,0,0,0.15)",
        fontSize = 20,
        fontWeight = "normal",
        fontStyle = "normal",
        fontFamily = "sans-serif",
    } = font;
    const [gapX, gapY] = gap;
    const gapXCenter = gapX / 2;
    const gapYCenter = gapY / 2;  
    const offsetLeft = offset?.[0] ?? gapXCenter;
    const offsetTop = offset?.[1] ?? gapYCenter;
    const markStyle = React.useMemo(() => {
    const mergedStyle: React.CSSProperties = {
      zIndex,
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      backgroundRepeat: "repeat",
    };

    /** Calculate the style of the offset */
    let positionLeft = offsetLeft - gapXCenter;
    let positionTop = offsetTop - gapYCenter;
    if (positionLeft > 0) {
      mergedStyle.left = `${positionLeft}px`;
      mergedStyle.width = `calc(100% - ${positionLeft}px)`;
      positionLeft = 0;
    }
    if (positionTop > 0) {
      mergedStyle.top = `${positionTop}px`;
      mergedStyle.height = `calc(100% - ${positionTop}px)`;
      positionTop = 0;
    }
    mergedStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`;

    return mergedStyle;
  }, [zIndex, offsetLeft, gapXCenter, offsetTop, gapYCenter]);
const getMarkSize = (ctx: CanvasRenderingContext2D) => {
    let defaultWidth = 120;
    let defaultHeight = 64;
    if (!image && ctx.measureText) {
      ctx.font = `${parseInt(fontSize + "")}px ${fontFamily}`;
      const contents = Array.isArray(content) ? content : [content];
      const sizes = contents.map((item) => {
      const metrics = ctx.measureText(item!);
      return [
          metrics.width,
          metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent,
        ];
      });
      defaultWidth = Math.ceil(Math.max(...sizes.map((size) => size[0])));
      defaultHeight =
        Math.ceil(Math.max(...sizes.map((size) => size[1]))) * contents.length +
        (contents.length - 1) * FontGap;
    }
    return [width ?? defaultWidth, height ?? defaultHeight] as const;
  };
    const [watermarkInfo, setWatermarkInfo] = React.useState<
    [base64: string, contentWith: number]
  >(null!);
    //创建水印组件
    const renderWatermark = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if(ctx){
            const ratio = getPixelRatio();
            const [markWidth, markHeight] = getMarkSize(ctx);
            const drawCanvas = (drawContent?: NonNullable<WatermarkProps['content']> | HTMLImageElement) => {
                //绘制水印
            const [nextClips, clipWith] = getClips(
                drawContent || "",
                rotate,
                ratio,
                markWidth,
                markHeight,
                {
                    color,
                    fontSize,
                    fontStyle,
                    fontWeight,
                    fontFamily,
                },
                gapX,
                gapY
                );
                setWatermarkInfo([nextClips, clipWith])
            }
            if (image) {
                // 绘制图片水印
                const img = new Image();
                img.onload = () => {
                drawCanvas(img);
                };
                img.onerror = () => {
                drawCanvas(content);
                };
                img.crossOrigin = "anonymous";
                img.referrerPolicy = "no-referrer";
                img.src = image;
            } else {
                // 绘制文本水印
                drawCanvas(content);
            }
        }
    }
      // ============================= Effect =============================

    const syncWatermark = useRafDebounce(renderWatermark);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(syncWatermark, [
        rotate,
        zIndex,
        width,
        height,
        image,
        content,
        color,
        fontSize,
        fontWeight,
        fontStyle,
        fontFamily,
        gapX,
        gapY,
        offsetLeft,
        offsetTop,
    ]);

    const container = useRef<HTMLDivElement>(null);

    // Append watermark to the container
    const [appendWatermark, isWatermarkEle] = useWatermark(markStyle);

    useEffect(() => {
        if (watermarkInfo) {
        appendWatermark(watermarkInfo[0], watermarkInfo[1], container.current!);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watermarkInfo]);

    const styles = useWatermarkStyles({
        className,
    });
      // ============================= Render =============================
  const onMutate = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      if (reRendering(mutation, isWatermarkEle)) {
        syncWatermark();
      }
    });
  };

  useMutateObserver(container.current as HTMLElement, onMutate);
      // ============================= Render =============================
    return(
        <div ref={container} className={styles.root} style={style}>
            {children}
            {/* 水印组件 */}
        </div>
    )
}

Watermark.displayName = "Watermark";