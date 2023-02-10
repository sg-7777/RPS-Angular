import { MatchDTO } from './match-dto';

export class GameDTO{
    matches: Array<MatchDTO> = new Array();
    playerOneScore: number;
    playerTwoScore: number;

}