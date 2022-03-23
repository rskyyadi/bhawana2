import {
  useState
} from 'react'
import {
  Editor
} from 'react-draft-wysiwyg'
import {
  EditorState
} from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const TextEditor = ({
  label,
  placeholder,
  error,
  errorText,
  editorState,
  onEditorStateChange,
  readOnly,
  options = ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link']

}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="mb-2">
      <label>
        <small>
          {label}
        </small>
      </label>
      <Editor
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        wrapperClassName={`text-editor ${isFocused && 'focused'} ${error && 'is-invalid'}`}
        editorClassName="px-3"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        readOnly={readOnly}
        toolbar={{ options }}
      />
      <small className="mt-1 text-danger">
        {errorText}
      </small>
    </div>
  )
}

export default TextEditor