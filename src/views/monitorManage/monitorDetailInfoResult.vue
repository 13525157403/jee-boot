<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="8" :sm="16">
            <a-form-item label="姓名/身份证/手机号码">
              <j-input placeholder="输入姓名/身份证/手机号码" v-model="queryParam.username"></j-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="所属项目">
              <a-select v-model="queryParam.realname" placeholder="请选择">
                <a-select-option value="1">男</a-select-option>
                <a-select-option value="2">女</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <template v-if="toggleSearchStatus">
            <a-col :md="6" :sm="8">
              <a-form-item label="交易类别">
                <a-select v-model="queryParam.phone" placeholder="请选择">
                  <a-select-option value="1">男</a-select-option>
                  <a-select-option value="2">女</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="8">
              <a-form-item label="金额档位">
                <a-select v-model="queryParam.phone" placeholder="请选择">
                  <a-select-option value="1">男</a-select-option>
                  <a-select-option value="2">女</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>

          <a-col :md="6" :sm="8">
            <span style="float: left; overflow: hidden" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button style="margin-left: 8px" type="primary" icon="download" @click="handleExportXls('用户信息')"
                >导出</a-button
              >
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
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay" @click="handleMenuClick">
          <!-- <a-menu-item key="1">
            <a-icon type="vertical-align-bottom" @click="batchDel" />
            导出
          </a-menu-item> -->
        </a-menu>
        <!-- <a-button style="margin-left: 8px">
          批量操作
          <a-icon type="down" />
        </a-button> -->
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>
      <!-- <div class="ant-alert ant-alert-info" style="margin-bottom: 16px">
        <i class="anticon anticon-info-circle ant-alert-icon"></i>已选择&nbsp;<a style="font-weight: 600">{{
          selectedRowKeys.length
        }}</a
        >项&nbsp;&nbsp;
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div> -->

      <a-table
        ref="table"
        bordered
        size="middle"
        rowKey="id"
        :columns="columns"
        :dataSource="[
          {
            id: 0,
            name: 'xxxxx',
            projectName: '网商贷-联合贷',
            mobile: 13456234563,
            certNo: '411XXX987656875678',
            loanBalance: '1200000',
            loanStatus: 0,
            monitorStatus: '待查询',
            transactionDate: '2022-45-12',
            transactionTypeValue: 'xxxxxxx',
            amtLevelValue: '[13000-15000000]',
            merchantName: 'xxxxxxxxxxxxxxxxxxxxxxxx',
          },
        ]"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="null"
        @change="handleTableChange"
      >
        <span slot="loanBalance" slot-scope="text">
          <a-tag color="red">逾</a-tag>
          <j-ellipsis :value="text" />
        </span>
        <span slot="certNo" slot-scope="text">
          <j-ellipsis :value="text" />
        </span>
        <span slot="merchantName" slot-scope="text">
          <j-ellipsis :value="text" />
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
import PasswordModal from '@/views/system/modules/PasswordModal'
import { getFileAccessHttpUrl } from '@/api/manage'
import { frozenBatch } from '@/api/api'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import SysUserAgentModal from '@/views/system/modules/SysUserAgentModal'
import JInput from '@/components/jeecg/JInput'
import UserRecycleBinModal from '@/views/system/modules/UserRecycleBinModal'
import JSuperQuery from '@/components/jeecg/JSuperQuery'
import JThirdAppButton from '@/components/jeecgbiz/thirdApp/JThirdAppButton'

export default {
  mixins: [JeecgListMixin],
  components: {
    JThirdAppButton,
    SysUserAgentModal,
    PasswordModal,
    JInput,
    UserRecycleBinModal,
    JSuperQuery,
  },
  data() {
    return {
      description: '',
      queryParam: {},
      recycleBinVisible: false,
      columns: [
        {
          title: '客户姓名',
          align: 'center',
          dataIndex: 'name',
          width: 100,
        },
        {
          title: '所属项目',
          align: 'center',
          width: 100,
          dataIndex: 'projectName',
        },
        {
          title: '手机号码',
          align: 'center',
          width: 120,
          dataIndex: 'mobile',
        },
        {
          title: '身份证',
          align: 'center',
          width: 120,
          dataIndex: 'certNo',
          ellipsis: true,
          scopedSlots: { customRender: 'certNo' },
        },
        {
          title: '在贷余额',
          align: 'center',
          width: 120,
          sorter: true,
          dataIndex: 'loanBalance',
          scopedSlots: { customRender: 'loanBalance' },
        },
        {
          title: '监控状态',
          align: 'center',
          width: 100,
          dataIndex: 'monitorStatus',
        },
        {
          title: '交易时间',
          align: 'center',
          width: 100,
          dataIndex: 'transactionDate',
        },
        {
          title: '交易类别',
          align: 'center',
          width: 100,
          dataIndex: 'transactionTypeValue',
        },
        {
          title: '金额（档）',
          align: 'center',
          width: 100,
          sorter: true,
          dataIndex: 'amtLevelValue',
        },
        {
          title: '商户名称',
          align: 'center',
          width: 100,
          ellipsis: true,
          dataIndex: 'merchantName',
          scopedSlots: { customRender: 'merchantName' },
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