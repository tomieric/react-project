import { NavBar, Swiper, Grid } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './index.scss'

function Home() {
  return (
    <>
      <NavBar backArrow={false}>HR FQA</NavBar>
      <div className='content'>
        <div className='swiper-container'>
          <Swiper>
            <Swiper.Item key={1}>
              <div className='swiper-item'>1</div>
            </Swiper.Item>
            <Swiper.Item key={2}>
              <div className='swiper-item'>2</div>
            </Swiper.Item>
            <Swiper.Item key={3}>
              <div className='swiper-item'>3</div>
            </Swiper.Item>
          </Swiper>
        </div>

        <div className='block-container'>
          <h2 className='block-header'>功能</h2>
          <div className='blocks'>
            <Grid columns={3} gap={15}>
              <Grid.Item>
                <Link to='/Lookup' className='block-item'>
                  <img src='/images/search@2x.png' />
                  <span>自助查询</span>
                </Link>
              </Grid.Item>
              <Grid.Item>
                <Link className='block-item' to = 'QA'>
                  <img src='/images/question@2x.png' />
                  <span>提问</span>
                </Link>
              </Grid.Item>
              <Grid.Item>
                <Link className='block-item' to='/comment'>
                  <img src='/images/comment@2x.png' />
                  <span>反馈意见</span>
                </Link>
              </Grid.Item>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
