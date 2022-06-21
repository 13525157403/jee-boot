<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6" :sm="12">
            <a-form-item label="监控任务名称">
              <j-input placeholder="请输入" v-model="queryParam.username"></j-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="10">
            <a-form-item label="日期">
              <a-range-picker v-model="queryParam.sex" :style="{ width: '256px' }" />
            </a-form-item>
          </a-col>

          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="任务状态">
                <a-select v-model="queryParam.status" placeholder="请选择">
                  <a-select-option value="">请选择</a-select-option>
                  <a-select-option value="1">正常</a-select-option>
                  <a-select-option value="2">冻结</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="所属项目">
                <a-select v-model="queryParam.status" placeholder="请选择">
                  <a-select-option value="">请选择</a-select-option>
                  <a-select-option value="1">正常</a-select-option>
                  <a-select-option value="2">冻结</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
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
      <a-button @click="handleChangePassword" type="primary" icon="plus">添加任务</a-button>
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        bordered
        size="middle"
        rowKey="id"
        :columns="columns"
        :dataSource="datas"
        :pagination="ipagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <span slot="startTime" slot-scope="text, record, index">
          <j-ellipsis :value="record.startTime + '-' + record.endTime" />
        </span>
        <span slot="status" slot-scope="text, record, index">
          <a-tag color="green" v-if="text == 1"> {{ record.statusValue }} </a-tag>
          <a-tag color="purple" v-else> {{ record.statusValue }} </a-tag>
        </span>

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />

          <a-dropdown>
            <a class="ant-dropdown-link"> 更多 <a-icon type="down" /> </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="handleDetail(record)">详情</a>
              </a-menu-item>

              <a-menu-item v-if="record.status == 0">
                <a href="javascript:;" @click="handleChangePassword(record.username)">启用</a>
              </a-menu-item>

              <a-menu-item v-else>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>停用</a>
                </a-popconfirm>
              </a-menu-item>

              <!-- <a-menu-item v-if="record.status == 1">
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
    <monitorModal></monitorModal>
  </a-card>
</template>

<script>
import monitorModal from '@/views/monitorManage/monitorModal'
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
    monitorModal,
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
        {
          title: '任务名称',
          align: 'center',
          dataIndex: 'taskManagementName',
          width: 100,
        },
        {
          title: '监控内容',
          align: 'center',
          width: 100,
          dataIndex: 'taskName',
        },
        {
          title: '所属项目',
          align: 'center',
          width: 100,
          dataIndex: 'projectName',
        },

        {
          title: '监控周期',
          align: 'center',
          width: 120,
          dataIndex: 'startTime',
          sorter: true,
          ellipsis: true,
          scopedSlots: { customRender: 'startTime' },
        },
        {
          title: '监控人数',
          align: 'center',
          width: 100,
          dataIndex: 'peopleAll',
        },
        {
          title: '最后一次监控日期',
          align: 'center',
          width: 130,
          dataIndex: 'maxDate',
          sorter: true,
        },
        {
          title: '当前状态',
          align: 'center',
          width: 100,
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' },
        },
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
      datas: [
        {
          id: 0,
          taskManagementName: '资金流向',
          taskName: 'xxxxxxxxxxx',
          projectName: '网商贷-联合贷',
          startTime: '2022-01-01',
          endTime: '2022-03-01',
          peopleAll: '1200000',
          maxDate: '2025-02-03',
          status: 1,
          statusValue: '监控中',
        },
        {
          id: 1,
          taskManagementName: '风险标签',
          taskName: 'xxxxxxxxxxx',
          projectName: '网商贷-联合贷',
          startTime: '2022-01-01',
          endTime: '2022-03-01',
          peopleAll: '1200000',
          maxDate: '2025-02-03',
          status: 0,
          statusValue: '已停用',
        },
        {
          id: 2,
          taskManagementName: '资金流向',
          taskName: 'xxxxxxxxxxx',
          projectName: '网商贷-联合贷',
          startTime: '2022-01-01',
          endTime: '2022-03-01',
          peopleAll: '1200000',
          maxDate: '2025-02-03',
          status: 0,
          statusValue: '已停用',
        },
        {
          id: 3,
          taskManagementName: '地址评分',
          taskName: 'xxxxxxxxxxx',
          projectName: '网商贷-联合贷',
          startTime: '2022-01-01',
          endTime: '2022-03-01',
          peopleAll: '1200000',
          maxDate: '2025-02-03',
          status: 0,
          statusValue: '已停用',
        },
        {
          id: 4,
          taskManagementName: '资金流向',
          taskName: 'xxxxxxxxxxx',
          projectName: '网商贷-联合贷',
          startTime: '2022-01-01',
          endTime: '2022-03-01',
          peopleAll: '1200000',
          maxDate: '2025-02-03',
          status: 1,
          statusValue: '监控中',
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