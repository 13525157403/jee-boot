<template>
  <a-card :bordered="false">
    <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 3 }" :data-source="cardData">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card :title="item.title">
          <a>已完成任务次数:123242423333333333 </a><br />
          <a>累计监控人数:123233333333333</a><br />
          <a>未完成任务次数:322222222222</a><br />
          <a>最近一次监控日期:2021-34-56</a>
        </a-card>
      </a-list-item>
    </a-list>

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6" :sm="12">
            <a-form-item label="监控任务名称">
              <!--<a-input placeholder="请输入账号查询" v-model="queryParam.username"></a-input>-->
              <j-input placeholder="输入监控任务名称" v-model="queryParam.username"></j-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8">
            <a-form-item label="日期">
              <a-range-picker v-model="queryParam.sex" :style="{ width: '256px' }" />
            </a-form-item>
          </a-col>

          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="任务状态">
                <a-select v-model="queryParam.realname" placeholder="请选择状态">
                  <a-select-option value="1">男</a-select-option>
                  <a-select-option value="2">女</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :md="6" :sm="8">
              <a-form-item label="所属项目">
                <a-select v-model="queryParam.phone" placeholder="请选择项目">
                  <a-select-option value="1">男</a-select-option>
                  <a-select-option value="2">女</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <!-- <a-col :md="6" :sm="8">
              <a-form-item label="用户状态">
                <a-select v-model="queryParam.status" placeholder="请选择">
                  <a-select-option value="">请选择</a-select-option>
                  <a-select-option value="1">正常</a-select-option>
                  <a-select-option value="2">冻结</a-select-option>
                </a-select>
              </a-form-item>
            </a-col> -->
          </template>

          <a-col :md="6" :sm="8">
            <span style="float: left; overflow: hidden" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator" style="border-top: 5px">
      <!-- <a-button @click="handleAdd" type="primary" icon="plus">添加用户</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('用户信息')">导出</a-button>
      <a-upload
        name="file"
        :showUploadList="false"
        :multiple="false"
        :headers="tokenHeader"
        :action="importExcelUrl"
        @change="handleImportExcel"
      >
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <j-third-app-button
        biz-type="user"
        :selected-row-keys="selectedRowKeys"
        syncToApp
        syncToLocal
        @sync-finally="onSyncFinally"
      /> -->
      <!-- <a-button type="primary" icon="hdd" @click="recycleBinVisible = true">回收站</a-button> -->
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay" @click="handleMenuClick">
          <a-menu-item key="1">
            <a-icon type="vertical-align-bottom" @click="batchDel" />
            导出
          </a-menu-item>
          <!-- <a-menu-item key="1">
            <a-icon type="delete" @click="batchDel" />
            删除
          </a-menu-item> -->
          <!-- <a-menu-item key="2">
            <a-icon type="lock" @click="batchFrozen('2')" />
            导出
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="unlock" @click="batchFrozen('1')" />
            解冻
          </a-menu-item> -->
        </a-menu>
        <a-button style="margin-left: 8px">
          批量操作
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
      <!-- <j-super-query :fieldList="superQueryFieldList" @handleSuperQuery="handleSuperQuery" /> -->
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px">
        <i class="anticon anticon-info-circle ant-alert-icon"></i>已选择&nbsp;<a style="font-weight: 600">{{
          selectedRowKeys.length
        }}</a
        >项&nbsp;&nbsp;
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

      <a-table
        ref="table"
        bordered
        size="middle"
        rowKey="id"
        :columns="columns"
        :dataSource="[
          {
            id: 0,
            taskManagementName: 'xxxxxxxxxxxxxxx',
            taskName: 'XXXXXXXXXXXXXX',
            projectName: '网商贷-联合贷',
            taskManagementDate: '2022-01-01-2022-01-01',
            peopleAll: '12000000',
            taskStatus: 98,
          },
          {
            id: 2,
            taskManagementName: 'xxxxxxxx',
            taskName: 'XXXXX',
            projectName: '网商贷-直投',
            taskManagementDate: '2022-01-01-2022-01-01',
            peopleAll: '12',
            taskStatus: 100,
          },
          {
            id: 3,
            taskManagementName: 'xxxxxx',
            taskName: 'XXXXXXXXXXXXXX',
            projectName: '网商贷-联合贷',
            taskManagementDate: '2022-01-01-2022-01-01',
            peopleAll: '1',
            taskStatus: 35,
          },
          {
            id: 4,
            taskManagementName: 'xxxxxxxxxxxxxxx',
            taskName: 'XXXXXXXXXXXXXX',
            projectName: '网商贷-联合贷',
            taskManagementDate: '2022-01-01-2022-01-01',
            peopleAll: '12000000',
            taskStatus: 10,
          }
        ]"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        @change="handleTableChange"
      >
        <template slot="taskStatus" slot-scope="text, record, index">
          <a-progress
            :strokeColor="getPercentColor(record.taskStatus)"
            :format="getPercentFormat"
            :percent="getFlowRateNumber(record.taskStatus)"
            style="width: 80px"
          />
        </template>
        <span slot="taskName" slot-scope="text">
          <j-ellipsis :value="text" />
        </span>
        <span slot="action" slot-scope="text, record">
          <!-- <a @click="handleEdit(record)">编辑</a> -->

          <a-divider type="vertical" />

          <a-dropdown>
            <a class="ant-dropdown-link"> 更多 <a-icon type="down" /> </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="getPageDetails(1, '/monitorManage/monitorDetailInfoResult')">清单</a>
              </a-menu-item>

              <!-- <a-menu-item>
                <a href="javascript:;" @click="handleChangePassword(record.username)">密码</a>
              </a-menu-item>

              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>

              <a-menu-item v-if="record.status == 1">
                <a-popconfirm title="确定冻结吗?" @confirm="() => handleFrozen(record.id, 2, record.username)">
                  <a>冻结</a>
                </a-popconfirm>
              </a-menu-item>

              <a-menu-item v-if="record.status == 2">
                <a-popconfirm title="确定解冻吗?" @confirm="() => handleFrozen(record.id, 1, record.username)">
                  <a>解冻</a>
                </a-popconfirm>
              </a-menu-item>

              <a-menu-item>
                <a href="javascript:;" @click="handleAgentSettings(record.username)">代理人</a>
              </a-menu-item> -->
            </a-menu>
          </a-dropdown>
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->

    <password-modal ref="passwordmodal" @ok="passwordModalOk"></password-modal>

    <sys-user-agent-modal ref="sysUserAgentModal"></sys-user-agent-modal>

    <!-- 用户回收站 -->
    <user-recycle-bin-modal :visible.sync="recycleBinVisible" @ok="modalFormOk" />
  </a-card>
</template>

<script>
import ChartCard from '@/components/ChartCard'
import ACol from 'ant-design-vue/es/grid/Col'
import Trend from '@/components/Trend'
import PasswordModal from '@/views/system/modules/PasswordModal'
import { putAction, getFileAccessHttpUrl } from '@/api/manage'
import { frozenBatch } from '@/api/api'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import SysUserAgentModal from '@/views/system/modules/SysUserAgentModal'
import JInput from '@/components/jeecg/JInput'
import UserRecycleBinModal from '@/views/system/modules/UserRecycleBinModal'
import JSuperQuery from '@/components/jeecg/JSuperQuery'
import JThirdAppButton from '@/components/jeecgbiz/thirdApp/JThirdAppButton'

export default {
  name: 'UserList',
  mixins: [JeecgListMixin],
  components: {
    JThirdAppButton,
    SysUserAgentModal,
    ChartCard,
    ACol,
    Trend,
    PasswordModal,
    JInput,
    UserRecycleBinModal,
    JSuperQuery,
  },
  data() {
    return {
      description: '这是用户管理页面',
      queryParam: {},
      recycleBinVisible: false,
      columns: [
        /*{
            title: '#',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
          },*/
        {
          title: '任务名称',
          align: 'center',
          dataIndex: 'taskManagementName',
          width: 120,
          sorter: true,
        },
        {
          title: '监控内容',
          align: 'center',
          width: 100,
          ellipsis: true,
          dataIndex: 'taskName',
          scopedSlots: { customRender: 'taskName' },
        },
        {
          title: '所属项目',
          align: 'center',
          width: 120,
          dataIndex: 'projectName',
          scopedSlots: { customRender: 'avatarslot' },
        },

        {
          title: '监控时间',
          align: 'center',
          width: 120,
          dataIndex: 'taskManagementDate',
          sorter: true,
        },
        {
          title: '监控人数',
          align: 'center',
          width: 80,
          dataIndex: 'peopleAll',
        },
        {
          title: '查询进度',
          align: 'center',
          width: 100,
          dataIndex: 'taskStatus',
          scopedSlots: { customRender: 'taskStatus' },
        },
        // {
        //   title: '部门',
        //   align: 'center',
        //   width: 180,
        //   dataIndex: 'orgCodeTxt',
        // },
        // {
        //   title: '负责部门',
        //   align: 'center',
        //   width: 180,
        //   dataIndex: 'departIds_dictText',
        // },
        // {
        //   title: '状态',
        //   align: 'center',
        //   width: 80,
        //   dataIndex: 'status_dictText',
        // },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' },
          align: 'center',
          width: 170,
        },
      ],
      superQueryFieldList: [
        { type: 'input', value: 'username', text: '用户账号' },
        { type: 'input', value: 'realname', text: '用户姓名' },
        { type: 'select', value: 'sex', dbType: 'int', text: '性别', dictCode: 'sex' },
      ],
      url: {
        syncUser: '/act/process/extActProcess/doSyncUser',
        list: '/sys/user/list',
        delete: '/sys/user/delete',
        deleteBatch: '/sys/user/deleteBatch',
        exportXlsUrl: '/sys/user/exportXls',
        importExcelUrl: 'sys/user/importExcel',
      },
      cardData: [
        {
          title: '资金流向',
        },
        {
          title: '地址评分',
        },
        {
          title: '核销客户',
        },
        {
          title: '风险标签',
        },
      ],
    }
  },
  computed: {
    importExcelUrl: function () {
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`
    },
  },
  methods: {
    getPercentColor(value) {
      let p = Number(value)
      if (p >= 90 && p < 100) {
        return 'rgb(244, 240, 89)'
      } else if (p >= 100) {
        return 'rgb(55,203,203)'
      } else {
        return 'rgb(16, 142, 233)'
      }
    },
    getFlowRateNumber(value) {
      return Number(value)
    },
    getPercentFormat(value) {
      return value + '%'
    },
    getAvatarView: function (avatar) {
      return getFileAccessHttpUrl(avatar)
    },

    batchFrozen: function (status) {
      if (this.selectedRowKeys.length <= 0) {
        this.$message.warning('请选择一条记录！')
        return false
      } else {
        let ids = ''
        let that = this
        let isAdmin = false
        that.selectionRows.forEach(function (row) {
          if (row.username == 'admin') {
            isAdmin = true
          }
        })
        if (isAdmin) {
          that.$message.warning('管理员账号不允许此操作,请重新选择！')
          return
        }
        that.selectedRowKeys.forEach(function (val) {
          ids += val + ','
        })
        that.$confirm({
          title: '确认操作',
          content: '是否' + (status == 1 ? '解冻' : '冻结') + '选中账号?',
          onOk: function () {
            frozenBatch({ ids: ids, status: status }).then((res) => {
              if (res.success) {
                that.$message.success(res.message)
                that.loadData()
                that.onClearSelected()
              } else {
                that.$message.warning(res.message)
              }
            })
          },
        })
      }
    },
    handleMenuClick(e) {
      if (e.key == 1) {
        this.batchDel()
      } else if (e.key == 2) {
        this.batchFrozen(2)
      } else if (e.key == 3) {
        this.batchFrozen(1)
      }
    },
    handleFrozen: function (id, status, username) {
      let that = this
      //TODO 后台校验管理员角色
      if ('admin' == username) {
        that.$message.warning('管理员账号不允许此操作！')
        return
      }
      frozenBatch({ ids: id, status: status }).then((res) => {
        if (res.success) {
          that.$message.success(res.message)
          that.loadData()
        } else {
          that.$message.warning(res.message)
        }
      })
    },
    handleChangePassword(username) {
      this.$refs.passwordmodal.show(username)
    },
    handleAgentSettings(username) {
      this.$refs.sysUserAgentModal.agentSettings(username)
      this.$refs.sysUserAgentModal.title = '用户代理人设置'
    },
    passwordModalOk() {
      //TODO 密码修改完成 不需要刷新页面，可以把datasource中的数据更新一下
    },
    onSyncFinally({ isToLocal }) {
      // 同步到本地时刷新下数据
      if (isToLocal) {
        this.loadData()
      }
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>