import { brandTeams } from '../../global/brandColors';
import type { Theme } from '../../types';
import { createTeamsDarkTheme } from '../../utils/createTeamsDarkTheme';

export const teamsDarkTheme: Theme = createTeamsDarkTheme(brandTeams);
