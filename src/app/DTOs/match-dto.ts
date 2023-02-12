import { PlayerDTO } from './player-dto';

export class MatchDTO{
    matchid: string;
    playerOne: PlayerDTO;
    playerTwo: PlayerDTO;
}