import * as React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import MenuBar from '../components/organisms/menu-bar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
// import TableSortLabel from '@material-ui/core/TableSortLabel'
// import TablePagination from '@material-ui/core/TablePagination'

import { ListItem } from '../modules/event-search'

import { initStart, changeData, searchStart } from '../modules/event-search'

import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

export class Demo extends React.Component {

  static async getInitialProps ({store}) {
    store.dispatch(initStart())
    return {}
  }

  render() {
    console.log('Demo#render')
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
      <React.Fragment>
        <MenuBar title='イベント検索' />
        <div style={{margin: '0 50px'}}>
          <div style={{marginTop: '20px'}}>
            <Link href='/'>
            <Button variant='contained' color='secondary'>イベント登録</Button>
            </Link>
          </div>
          <Grid container spacing={16} style={{marginTop: '10px'}}>
            <Grid item xs={4}>
              <TextField
                id='organization'
                label='組織'
                margin='normal'
                variant='filled'
                fullWidth={true}
                value={session.organization}
                inputProps={{readOnly: true, tabIndex: -1}}
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='area'
                label='エリア'
                margin='normal'
                variant='filled'
                fullWidth={true}
                value={`${session.areaCode}: ${session.areaName}`}
                inputProps={{readOnly: true, tabIndex: -1}}
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='store'
                label='店舗名'
                margin='normal'
                variant='filled'
                fullWidth={true}
                value={`${session.storeCode}: ${session.storeName}`}
                inputProps={{readOnly: true, tabIndex: -1}}
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                id='event'
                label='対象イベント'
                margin='normal'
                variant='outlined'
                fullWidth={true}
                value={searchConditions.targetEvent}
                onChange={ (e) => changeData('targetEvent', e.target.value) }
                InputLabelProps={{shrink: true}}
              >
                {eventList.map((event: ListItem, idx) => (
                  <MenuItem key={idx} value={event.value}>{event.text}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                id='category'
                label='イベントカテゴリ'
                margin='normal'
                variant='outlined'
                fullWidth={true}
                value={searchConditions.eventCategory}
                onChange={ (e) => changeData('eventCategory', e.target.value) }
                InputLabelProps={{shrink: true}}
              >
                {eventCategoryList.map((category: ListItem, idx) => (
                  <MenuItem key={idx} value={category.value}>{category.text}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                id='teacher'
                label='講師名'
                margin='normal'
                variant='outlined'
                fullWidth={true}
                value={searchConditions.teacher}
                onChange={ (e) => changeData('teacher', e.target.value) }
                InputLabelProps={{shrink: true}}
              >
                {teacherList.map((teacher: ListItem, idx) => (
                  <MenuItem key={idx} value={teacher.value}>{teacher.text}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='event-name'
                label='イベント名称'
                margin='normal'
                variant='outlined'
                fullWidth={true}
                value={searchConditions.eventName}
                onChange={ (e) => changeData('eventName', e.target.value) }
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='event-description'
                label='イベント詳細'
                margin='normal'
                variant='outlined'
                fullWidth={true}
                value={searchConditions.eventDescription}
                onChange={ (e) => changeData('eventDescription', e.target.value) }
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='price'
                label='参加費'
                margin='normal'
                variant='outlined'
                fullWidth={true}
                type='number'
                value={searchConditions.price || ''}
                onChange={ (e) => changeData('price', e.target.value) }
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='date_start'
                label='掲載日（開始）'
                margin='normal'
                variant='outlined'
                fullWidth={true}
                type='date'
                value={searchConditions.startDate || ''}
                onChange={ (e) => changeData('startDate', e.target.value) }
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='date_end'
                label='掲載日（終了）'
                margin='normal'
                variant='outlined'
                fullWidth={true}
                type='date'
                value={searchConditions.endDate || ''}
                onChange={ (e) => changeData('endDate', e.target.value) }
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                id='status'
                label='ステータス'
                margin='normal'
                variant='outlined'
                fullWidth={true}
                value={searchConditions.status}
                onChange={ (e) => changeData('status', e.target.value) }
                InputLabelProps={{shrink: true}}
              >
                {statusList.map((status: ListItem, idx) => (
                  <MenuItem key={idx} value={status.value}>{status.text}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                label='全店舗公開'
                control={
                  <Checkbox
                    checked={searchConditions.isRelease}
                    color='primary'
                    value='public'
                    onChange={(e) => changeData('isRelease', e.target.checked)}
                  />
                }
              />
            </Grid>
            <Grid item xs={6} style={{textAlign: 'right'}}>
              <div style={{position: 'relative'}}>
                <Button variant='contained' color='primary' disabled={isSearching} onClick={() => search(searchConditions)}>
                  検索
                  {isSearching && <CircularProgress size={24} style={{position: 'absolute'}} />}
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>

        {searchResults.length > 0 &&
          <div style={{margin: '50px'}}>
          <Typography variant='subheading' color='primary' style={{marginBottom: '10px'}}>
            <span>検索結果:&nbsp;&nbsp;&nbsp; {searchResults.length} 件</span>
          </Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>イベントカテゴリ</TableCell>
                  <TableCell>イベント名称</TableCell>
                  <TableCell>店舗名</TableCell>
                  <TableCell>全店／個店</TableCell>
                  <TableCell>掲載期間</TableCell>
                  <TableCell>ステータス</TableCell>
                  <TableCell>&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResults.map(rcd => (
                  <TableRow>
                    <TableCell>{ rcd.id }</TableCell>
                    <TableCell>{ rcd.eventCategory }</TableCell>
                    <TableCell>{ rcd.eventName }</TableCell>
                    <TableCell>{ rcd.storeName }</TableCell>
                    <TableCell>{ rcd.isRelease ? '全店' : '個店' }</TableCell>
                    <TableCell>{ rcd.date }</TableCell>
                    <TableCell>{ rcd.status }</TableCell>
                    <TableCell>
                      <Link href='/'><a>編集</a></Link>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <Link href='/'><a>開催日程登録</a></Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)

function mapStateToProps(state) {
  const session = Object.assign({}, state.session)
  return { ...state.eventSearch, session }
}

function mapDispatchToProps(dispatch) {
  return {
    search: (searchConditions) => {dispatch(searchStart(searchConditions))},
    changeData: (target, value) => {dispatch(changeData(target, value))}
  }
}


