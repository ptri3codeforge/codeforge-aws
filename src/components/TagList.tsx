import React from "react";
import Tag from "./Tag";

// componente <TagList />
  //@ts-ignore: Unreachable code error
function TagList({ tags, onDeleteTag }) {
      //@ts-ignore: Unreachable code error
  let tagsUI = tags.map(tag => {
        //@ts-ignore: Unreachable code error
    return <Tag onDeleteTag={() => onDeleteTag(tag)} key={tag} value={tag} />;
  });
  return <div className="tag-list">{tagsUI}</div>;
}

export default TagList;
