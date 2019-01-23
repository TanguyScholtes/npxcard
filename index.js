#!/usr/bin/env node

const chalk = require( 'chalk' );
const figlet = require( 'figlet' );
const boxen = require( 'boxen' );
const gradient = require( 'gradient-string' );
const terminalImage = require( 'terminal-image' );

/*
 * Display all available Figlet fonts
 */
/*
figlet.fonts(function(err, fonts) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.dir(fonts);
});
return;
*/

const boxenOptions = {
    borderColor: '#2D3CD2',
    borderStyle: 'round',
    margin: {
        top: 2,
        bottom: 2,
        left: 5,
        right: 5
    },
    padding: 1
};

const phoenix = '    ／"\'￣フ／)          、' + '\n' +
                '  ,/ ,--、 ￣､__フ      ／/' + '\n' +
                '  ,ヘｌ⌒ﾉ   ＞       ,／ /＿' + '\n' +
                ' ( ＿l_"_ニ_ く＿  ／） ／ ／' + '\n' +
                '  ゛ ,＞      フ､    ､､＞' + '\n' +
                '   <" （      フ _＿＞' + '\n' +
                '   ヽ  ＼､､ ＿フ\' ノ' + '\n' +
                '    ＼、＿＿､､,_ノ゛' + '\n' +
                '         〉ﾆ〉ﾆ〉' + '\n' +
                '       ,､_/ﾆ/ﾆ/' + '\n' +
                '     ∠ｌ∠ｌ､ニ＞';


const card = '\n' +
            chalk.blue.bold( 'Linkedin:' ) + chalk.white( ' https://www.linkedin.com/in/' ) + chalk.blue( 'tanguy-scholtes-907366172' ) + '\n' +
            chalk.gray.bold( '           GitHub:' ) + chalk.white( ' https://github.com/' ) + chalk.cyan( 'TanguyScholtes' ) + '\n' +
            chalk.red.bold( "           NPM:" ) + chalk.white( ' https://www.npmjs.com/' ) + chalk.red( '~tanguyscholtes' ) + '\n' +
            chalk.green.bold( '                 Web:' ) + chalk.green( ' http://tanguyscholtes.be/' ) + '\n' +
            '\n' +
            '\n' +
            phoenix;

function displayString ( string, startColor, endColor, font ) {
    figlet( string,
        {
            font: font
        },
        function( error, string ) {
            if ( error ) {
                console.log( 'Whoops!' );
                console.dir( error );
                return;
            }
            console.log( gradient( startColor, endColor )( string ) );
        }
    );

    return new Promise( success => {
        setTimeout( () => {
            success( 'displayed' );
        }, 100 );
    } );
}

async function displayCard () {
    let firstname = await displayString( '    Tanguy', 'rgb(185, 0, 0)', 'rgb(125, 0, 0)', 'Bloody' );
    let lastname = await displayString( '   Scholtes', 'rgb(125, 0, 0)', 'rgb(90, 0, 0)', 'Bloody' );
    let work = await displayString( "   Web developer", 'rgb(50, 130, 195)', 'rgb(45, 60, 210)', 'Cybermedium' );
    console.log( '\n' );
    console.log( await terminalImage.file( './res/me.png' ) );

    console.log( boxen( card, boxenOptions ) );
}

function clearScreen () {
    console.clear();
    console.log('\x1Bc');
}

clearScreen();
displayCard();
