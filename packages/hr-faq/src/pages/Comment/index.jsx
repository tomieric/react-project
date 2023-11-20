import { NavBar, Form, Selector, Button, TextArea } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

function Comment() {
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }
  const onFinish = (formVal) => {
    console.log(formVal)
    onBack()
  }

  return (
    <>
      <NavBar onBack={onBack}>反馈意见</NavBar>
      <Form
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
        onFinish={onFinish}
      >
        <Form.Item name='type' label='类型'>
        <Selector
          columns={3}
          options={[
            { label: '福利', value: 'apple' },
            { label: '绩效', value: 'orange' },
            { label: '晋升', value: 'banana' },
            { label: '其他', value: 'other' },
          ]}
        />
        </Form.Item>
        <Form.Item name='comment' label='意见' help='请输入 2-100 个字符'>
          <TextArea
            placeholder='请留下您的宝贵意见'
            maxLength={100}
            rows={2}
            showCount
          />
        </Form.Item>
      </Form>
    </>
  )
}

export default Comment
