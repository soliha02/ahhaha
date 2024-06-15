let son1 = prompt('1-son kiriting🎀')
let son2 = prompt('2-son kiriting🎀')

function kattason(a,b) {
    if (a>b) {
        alert( a + ">" + b )
    } else if ( b > a ){
        alert( b + ">" + a )
    }else if ( a === b  ){
        alert( 'bu ikki son bir-biriga teng <3' )
    }
}

kattason( son1 , son2 )