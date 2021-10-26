import Quill from '../lib'

export default function ClassAndStyle() {
  return (
    <>
      <h1>Class and style</h1>
      <p>In this example, we'll add a className and style to Quill.</p>
      <style>{'.my-classy-quill { background-color: pink }'}</style>
      <Quill
        className="my-classy-quill"
        value="Hello Quill!"
        style={{ padding: 20 }}
      />
    </>
  )
}
