#!/usr/bin/env node

const chalk = require( 'chalk' );
const figlet = require( 'figlet' );
const boxen = require( 'boxen' );
const gradient = require( 'gradient-string' );

const boxenOptions = {
    borderColor: '#2D3CD2',
    borderStyle: 'round',
    margin: {
        top: 2,
        bottom: 2,
        left: 41,
        right: 41
    },
    padding: 1
};

const datas = {
    linebreak: '\n',
    linkedin: chalk.blue.bold( 'Linkedin:' ) + chalk.white( ' https://www.linkedin.com/in/' ) + chalk.blue( 'tanguy-scholtes-907366172' ),
    github: chalk.gray.bold( '           GitHub:' ) + chalk.white( ' https://github.com/' ) + chalk.cyan( 'TanguyScholtes' ),
    npm: chalk.red.bold( "           NPM:" ) + chalk.white( ' https://www.npmjs.com/' ) + chalk.red( '~tanguyscholtes' ),
    web: chalk.green.bold( '                 Web:' ) + chalk.green( ' http://tanguyscholtes.be/' )
};

const card = datas.linebreak +
            datas.linkedin + datas.linebreak +
            datas.github + datas.linebreak +
            datas.npm + datas.linebreak +
            datas.web + datas.linebreak;

function displayString ( string, startColor, endColor, font ) {
    figlet( string,
        {
            kerning: 'fitted',
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
    let name = await displayString( 'Tanguy Scholtes', 'rgb(185, 0, 0)', 'rgb(210, 145, 45)', 'Univers' );
    let work = await displayString( "              Web developper", 'rgb(50, 130, 195)', 'rgb(45, 60, 210)', 'cybermedium' );

    console.log( boxen( card, boxenOptions ) );
}

function clearScreen () {
    console.clear();
    console.log('\x1Bc');
}

clearScreen();
displayCard();
