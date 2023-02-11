import { MatchDTO } from './match-dto';

export class GameDTO{
    gameid: number;
    matches: Array<MatchDTO> = new Array();
    playerOneScore: number;
    playerTwoScore: number;

}