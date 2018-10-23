import * as React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import { Layout, Menu, Row, Col, Button, Form, Input, Icon, Select, InputNumber, DatePicker, Switch } from 'antd'
const { Header, Content } = Layout
const FormItem = Form.Item
const Option = Select.Option
const {RangePicker} = DatePicker

import { ListItem } from '../modules/event-search'
import { changeData, searchStart } from '../modules/event-search'

import { AbstractComponent } from '../libs/abstract-component'
import { initSaga } from '../sagas/event-search'

export class Demo extends AbstractComponent {

  static async getInitialProps () {
    await super.initializer(initSaga)
    return {}
  }

  render() {

    const {
      session,
      eventList,
      eventCategoryList,
      teacherList,
      statusList,
      searchConditions,
      searchResults,
      isSearching,
      search,
      changeData,
    } = this.props

    return (
      <Layout>

        <Header style={{ position: 'fixed', width: '100%', height: '64px', zIndex: '1000' }}>
          <h3 style={{color: 'white'}}>イベント検索</h3>
        </Header>

        <Content style={{ margin: '94px 30px 30px 30px' }}>
          <Row>
            <Col>
              <Link href='/'>
                <Button type='primary'>イベント検索</Button>
              </Link>
            </Col>
          </Row>

          <Form layout='inline' style={{ marginTop: '20px' }}>

            <FormItem label='組織'>
              <Input value={session.organization} style={{width: '250px'}} disabled />
            </FormItem>
            <FormItem label='エリア'>
              <Input value={`${session.areaCode}: ${session.areaName}`} style={{width: '250px'}} disabled />
            </FormItem>
            <FormItem label='店舗名'>
              <Input value={`${session.storeCode}: ${session.storeName}`} style={{width: '250px'}} disabled />
            </FormItem>

            <br />

            <FormItem label='対象イベント'>
              <Select style={{width: '250px'}} value={searchConditions.targetEvent} onChange={(v) => changeData('targetEvent', v)}>
                {eventList.map((event: ListItem, idx) => (
                  <Option key={idx} value={event.value}>{event.text}</Option>
                ))}
              </Select>
            </FormItem>

            <FormItem label='イベントカテゴリ'>
              <Select style={{width: '250px'}} value={searchConditions.eventCategory} onChange={(v) => changeData('eventCategory', v)}>
                {eventCategoryList.map((event: ListItem, idx) => (
                  <Option key={idx} value={event.value}>{event.text}</Option>
                ))}
              </Select>
            </FormItem>

            <FormItem label='講師名'>
              <Select style={{width: '250px'}} value={searchConditions.teacher} onChange={(v) => changeData('teacher', v)}>
                {teacherList.map((event: ListItem, idx) => (
                  <Option key={idx} value={event.value}>{event.text}</Option>
                ))}
              </Select>
            </FormItem>

            <br />

            <FormItem label='イベント名称'>
              <Input value={searchConditions.eventName} onChange={(e) => changeData('eventName', e.target.value)} style={{width: '250px'}} />
            </FormItem>

            <FormItem label='イベント詳細'>
              <Input value={searchConditions.eventDescription} onChange={(e) => changeData('eventDescription', e.target.value)} style={{width: '500px'}} />
            </FormItem>

            <br />

            <FormItem label='参加費'>
              <InputNumber value={searchConditions.price} onChange={(v) => changeData('price', v)} style={{width: '150px'}} />
            </FormItem>

            <FormItem label='掲載日'>
              <RangePicker onChange={(e) => {
                const d1 = e[0] ? e[0]._d : ''
                const d2 = e[1] ? e[1]._d : ''
                changeData('startDate', d1)
                changeData('endDate', d2)
              }} />
            </FormItem>

            <FormItem label='ステータス'>
              <Select style={{width: '250px'}} value={searchConditions.status} onChange={(v) => changeData('status', v)}>
                {statusList.map((event: ListItem, idx) => (
                  <Option key={idx} value={event.value}>{event.text}</Option>
                ))}
              </Select>
            </FormItem>

            <br />

            <FormItem label='全店舗公開'>
              <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} onChange={(v) => changeData('isRelease', v)} />
            </FormItem>

            <br />

            <FormItem style={{textAlign: 'right', width: '100%'}}>
              <Button htmlType='submit'>検索</Button>
            </FormItem>

          </Form>
        </Content>

      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)

function mapStateToProps(state, args) {
  return { ...state.eventSearch, session: {...state.session}, ...args }
}

function mapDispatchToProps(dispatch) {
  return {
    search: (searchConditions) => {dispatch(searchStart(searchConditions))},
    changeData: (target, value) => {dispatch(changeData(target, value))}
  }
}


