import './styles.css'
import First from './First'
import Second from './Second'
import ClassAndStyle from './ClassAndStyle'

export default function Examples() {
  return (
    <>
      <h1>First example</h1>
      <First />
      <h1>Second example</h1>
      <p>
        This is Quill without any options. Its first Quill component should
        print a warning about no theme being specified to the console. The
        second one should however receive the prop noTheme = true, and not print
        the warning.
      </p>
      <Second />
      <ClassAndStyle />
    </>
  )
}
