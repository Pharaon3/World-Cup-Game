// constants
var textColor = '#82173b';
var initialRectColor = '#e6e7e8';
var winnerRectColor = '#dfc5ce';
var winnerCircleColor = '#f9b419';
var loserRectColor = '#e6e7e8';
var loserCircleColor = '#00c5fa';
var blankRectColor = '#ddd';
var lineColor = '#d6d6d6';
var firstRectColor = '#82173b';
var secondRectColor = '#c18b9d';
var firstTextColor = '#fff';
var secondTextColor = textColor;
var countryNames = [
                    ['qtr', 'ecu', 'sen', 'hol'],
                    ['ing', 'irn', 'usa', 'gal'],
                    ['arg', 'ara', 'mex', 'pol'],
                    ['fra', 'aus', 'din', 'tun'],
                    ['esp', 'cri', 'ale', 'jpn'],
                    ['bel', 'can', 'mar', 'cro'],
                    ['bra', 'ser', 'sui', 'cam'],
                    ['por', 'ghn', 'uru', 'cor']];
var countryFullNames = [
                    ['qatar', 'ecuador', 'senegal', 'holanda'],
                    ['inglaterra', 'iran', 'usa', 'gales'],
                    ['argentina', 'a. saudita', 'mexico', 'polonia'],
                    ['francia', 'australia', 'dinamarca', 'tunez'],
                    ['espana', 'costa rica', 'alemania', 'japon'],
                    ['belgica', 'canada', 'marruecos', 'croacia'],
                    ['brasil', 'serbia', 'suiza', 'camerun'],
                    ['portugal', 'ghana', 'uruguay', 'r. de corea']];
var initialCircleColor = "#fff";

var leagueWinner = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],];
var octavosWinner = [-1, -1, -1, -1, -1, -1, -1, -1];
var cuartosWinner = [-1, -1, -1, -1];
var semifinalWinner = [-1, -1];
var finalWinner = [-1];