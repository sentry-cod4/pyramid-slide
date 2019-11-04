(function(wnd) {
  var v1 = null; // приватный статический член класса

  function Pyramid() 
  {      // *--- Конструктор ---------------*
    this.addListn = addListn;
    this.symbols = null;
    this.high = null;
    this.screen = null;
    this.highValue = null;
  };

  // *--- Приватные статические методы/методы --------------*

  // Add listeners function: Needs two select objects
  function addListn(symbols, high,screen,highValue)
  {

  // Take objects given as args or the ones already stored in class object 
    symbols = symbols || Pyramid.symbols || null;
    high = high || Pyramid.high || null;
    screen = screen || Pyramid.screen || null;
    highValue  = highValue  || Pyramid.highValue  || null;
    if (Pyramid.symbols !== symbols)Pyramid.symbols = symbols;
    if (Pyramid.high !== high)Pyramid.high = high;
    if (Pyramid.screen !== screen)Pyramid.screen = screen;
    if (Pyramid.highValue !== highValue)Pyramid.highValue = highValue;
  // Needed objects exist check
    if (symbols == null || high == null || screen == null || highValue == null)
    {
      console.log('Failed to initialize listeners! At least one of select objects is null.');
      return false;
    }

  // add event listeners
    symbols.addEventListener("change", Listn, false);
    high.addEventListener("mousemove", Listn, false);
    console.log(screen.textContent);

    return true;
  };

  function Listn (evt)
  {
    evt = evt || window.event; 
    var targ = evt.target || evt.srcElement; 
    PyramidChange();
  };

  function PyramidChange()
  {
    screen=Pyramid.screen;
    highValue=Pyramid.highValue;
    let pyramid = '';
    let height = +high.value;
    for(let i = 1; i<= height; i++){
      pyramid +='&nbsp;'.repeat(height-i) + symbols.value.repeat(i) +'<br>'; 
    }
    screen.innerHTML = pyramid;
    highValue.textContent = high.value;
    return true;
  }

  

  return (wnd.Pyramid = Pyramid);
})(window);

 //window['leInpParse'] = leInpParse;

//## marked for deletion


function init() {
  
  
  var symbols = document.getElementById("symbols");
  var high = document.getElementById("high");
  var screen = document.getElementById("screen");
  var highValue = document.getElementById("highValue");
  console.log(screen.textContent);
  var test = new Pyramid;
  test.addListn(symbols, high, screen,highValue);
}