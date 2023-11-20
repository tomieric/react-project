import { NavBar, Collapse } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

function QA() {
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }

  return (
    <>
      <NavBar onBack={onBack}>问答列表</NavBar>
      <Collapse accordion>
        <Collapse.Panel key={1} title = '问题问题问题问题？'>
        问题解答问题解答，问题解答问题解答问题解
        </Collapse.Panel>
        <Collapse.Panel key={2} title = '问题问题问题问题？'>
        问题解答问题解答，问题解答问题解答问题解
        </Collapse.Panel>
        <Collapse.Panel key={3} title = '问题问题问题问题？'>
        问题解答问题解答，问题解答问题解答问题解
        </Collapse.Panel>
        <Collapse.Panel key={4} title = '问题问题问题问题？'>
        问题解答问题解答，问题解答问题解答问题解
        </Collapse.Panel>
        <Collapse.Panel key={5} title = '问题问题问题问题？'>
        问题解答问题解答，问题解答问题解答问题解
        </Collapse.Panel>
        <Collapse.Panel key={6} title = '问题问题问题问题？'>
        问题解答问题解答，问题解答问题解答问题解
        </Collapse.Panel>
      </Collapse>
    </>
  )
}

export default QA
