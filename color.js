var object = {
  setColor : function(color){
    // var array = document.querySelectorAll('a');
    // var i=0;
    // while(i<array.length)
    // {
    //   array[i].style.color = color;
    //   i++;
    // }
    $('a').css('color', color);
  },
  nightModeHandler : function(self){
    var target = document.querySelector('body').style;

    if(self.value==='nightmode')
    {
      target.backgroundColor = 'black';
      target.color='white';
      alert('night mode appied.')
      self.value='daymode';
      object.setColor('orange');

    }
    else{
      target.backgroundColor = 'white';
      target.color='black';
      alert('day mode appied.')
      self.value='nightmode';
      object.setColor('green');
    }
  }
}
