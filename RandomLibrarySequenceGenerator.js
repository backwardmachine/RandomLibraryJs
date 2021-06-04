function __basicloop( a, b, fn, c = 0 )
{
  var i;
  for (
    i = a;
      i < b;
        i++ )
    fn( i, c );
}

function __rnsg__convert( m )
{

  switch ( m )
  {
    case 0: return __rnsg__binary(); break;
    case 1: return __rnsg__integer(); break;
  }
  return 0;
}

function __rnsg__binary()
{
  return Math.round( Math.random() );
}

function __rnsg__integer()
{
  var __r0 = document.getElementById( "rnsg__integer__r0" ).value;
  var __r1 = document.getElementById( "rnsg__integer__r1" ).value;
  return __rnsg__integer__ranged( __r0, __r1 );
}

function __rnsg__integer__ranged( __r0, __r1 )
{
  var r = Math.random();
  var d = __r1 - __r0;
  var m = r * d;
  var k = __r0 + m;
  return Math.round( k );
}

function __rnsg__click__button()
{
  var seq = new Array();
  var a = 0;
  var b = Number( document.getElementById( "rnsg__amount" ).value );
  var m = Number( document.getElementById( "rnsg__mode"   ).value );
  var c = Number( document.getElementById( "rnsg__codex"  ).value );
  var w = Number( document.getElementById( "rnsg__words"  ).value );
  __basicloop( a, b, loc__create );

  function loc__create( i )
  {
    var p = __rnsg__integer__ranged( 0, w - 1 );
    var __vars = {
      place : p
    };
    __basicloop( 0, w, loc__sector, __vars );
  }

  function loc__sector( i, __vars )
  {
    var x = 0;
    if ( i == __vars.place )
      x = c;
    else
      x = __rnsg__convert( m );
    seq.push( x );
  }

  var rnsg__string = seq.join( ", " );
  var elem = document.getElementById( "rnsg__content" );
  elem.innerHTML = rnsg__string;
}

function __rnsg__click__amount( e )
{
  e.target.value = '';
}

function __rnsg__click__fn( m )
{
  return function () {
    document.getElementById( "rnsg__mode" ).value = m;
    document.getElementById( "rnsg__button" ).click();
  }
}
