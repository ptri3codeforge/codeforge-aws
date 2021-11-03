import React from "react";
import TagList from "./TagList";

const cStyle = {
  position: "relative",
  display: "inline-block",
  width: "auto",
  overflow: "auto"
};
const iStyle = {
  display: "inline-block",
  fontSize: "1em",
  margin: "5px",
  width: "auto",
  
 
};
  //@ts-ignore: Unreachable code error
function InputTag({ defaultTags, onAddTag, onDeleteTag, placeHolder }) {
      //@ts-ignore: Unreachable code error
  const onKeyUp = e => {
    //console.log(e.key);
    // codice 188 per la virgola, 13 per invio
    if (e.key === "," || e.key === "Enter") {
      let input = e.target.value.trim().split(",");
      //esci se non ci sono tag
      if (input.length === 0 || input[0] === "") return;
      onAddTag(input);
      e.target.value = "";
    }
  };
  //@ts-ignore: Unreachable code error
  const _onDeleteTag = tag => {
    onDeleteTag(tag);
  };

  return (
        //@ts-ignore: Unreachable code error
    <div style={cStyle}>
      <TagList tags={defaultTags} onDeleteTag={_onDeleteTag} />
      <input
        style={iStyle}
        onKeyUp={e => onKeyUp(e)}
        type="text"
        placeholder={placeHolder as string}
      />
    </div>
  );
}

export default InputTag;
