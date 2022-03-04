import { useState } from "react";
import { Row, Col } from "antd";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";

Quill.register(
  {
    "formats/emoji": quillEmoji.EmojiBlot,
    "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
    "modules/emoji-shortname": quillEmoji.ShortNameEmoji
  },
  true
);
function Editor() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  let editorRef;
  const toolbarOptions = {
    container: [["emoji"]]
  };
  const modules = {
    toolbar: toolbarOptions,
    "emoji-toolbar": true,
    "emoji-shortname": true
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(value);
  };
  return (
    <Row gutter={[48, 48]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <form className="card" onSubmit={handleSubmit}>
          <div className="group">
            <ReactQuill
              theme="snow"
              value={value}
              placeholder="Your Text Here..."
              onChange={setValue}
              modules={modules}
              ref={editorRef}
            />

            <button className="btn-form" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <ReactQuill modules={{ toolbar: null }} value={text} readOnly={true} />
      </Col>
    </Row>
  );
}

export default Editor;
