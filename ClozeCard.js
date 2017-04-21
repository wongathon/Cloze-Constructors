var ClozeCard = function(text, cloze){
  this.fullText = text;
  this.cloze = cloze;

  this.partial = partIt(this.fullText, this.cloze);

  function partIt(f, c){
    a = f.replace(c, "...");
    return a;
  };

  if (this.fullText.includes(this.cloze) === false){
    console.log("Error! Choose a valid cloze.");
  };

}

module.exports = ClozeCard;