import { MatchDTO } from './match-dto';

export class GameDTO{
    gameid: string;
    matches: Array<MatchDTO> = new Array();
    playerOneScore: number;
    playerTwoScore: number;

}