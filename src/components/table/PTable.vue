<template>
  <div class="custom-ptable">
    <Table
      :data="data"
      :columns="columns"
      :size="size"
      stripe
      @on-row-click="onRowClick"
      @on-sort-change="onSortChange"
      @on-row-dblclick="onRowDbClick"
      @on-selection-change="onSelect"
      :highlight-row="highlightRow"
    />

    <div class="ultra-page">
      <Page
        :total="total"
        :current="page"
        :page-size="pageSize"
        show-elevator
        show-total
        size="small"
        placement="top"
        @on-change="changePage"
        @on-page-size-change="pageSizeChange"
      />
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "PTable",
  props: [
    "dataSource",
    "columnSource",
    "size",
    "highlightRow",
    "height",
    "pageSize"
  ],
  data() {
    return {
      page: 1,
      descorder: true
    };
  },
  computed: {
    data() {
      let { dataSource, page, pageSize } = this;
      if ((this.page - 1) * pageSize >= dataSource.length) {
        this.page = Math.max(1, this.page - 1);
      }
      const start = (this.page - 1) * pageSize;
      const end = Math.min(
        this.page * pageSize,
        dataSource ? dataSource.length : 0
      );
      let result = [];
      for (let i = start; i < end; i++) {
        result.push(dataSource[i]);
      }
      return result;
    },
    total() {
      return this.dataSource ? this.dataSource.length : 0;
    },
    tableHeight() {
      if (this.height) return this.height;

      if (this.data.length >= 10) {
        return window.innerHeight < 750 ? 450 : 521;
      } else {
        return "";
      }
    },
    columns(){
      let result = this.columnSource.map(item=>{
        item.tooltip=true
        return item
      })
      return result
    }

  },
  watch: {
    dataSource() {
      this.page = 1;
    }
  },
  mounted() {
    //给全部cell添加  tootip
    
  },
  methods: {
   
    compare(property) {
      if (property == "rate") {
        if (this.descorder) {
          this.descorder = !this.descorder;
          return function(a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return parseFloat(value1) - parseFloat(value2);
          };
        } else {
          this.descorder = !this.descorder;
          return function(a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return parseFloat(value2) - parseFloat(value1);
          };
        }
      } else {
        if (this.descorder) {
          this.descorder = !this.descorder;
          return function(a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
          };
        } else {
          this.descorder = !this.descorder;
          return function(a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return value2 - value1;
          };
        }
      }
    },
    changePage(v) {
      this.page = v;
    },
    pageSizeChange(v) {
      this.pageSize = v;
    },
    onRowClick(v) {
      this.$emit("on-row-click", v);
    },
    onSortChange(item) {
      // this.$emit("on-sort-change", column, key, order);
      console.log("排序的参数是", item.column, item.key, item.order);
      let newdata = this.dataSource.sort(this.compare(item.key, item.order));
      console.log(this.dataSource);
      console.log(newdata);
    },
    onRowDbClick(v) {
      this.$emit("on-row-dblclick", v);
    },
    onSelect(selection, row) {
      this.$emit("on-select", selection, row);
    }
  }
};
</script>

<style lang="less">
.custom-ptable {
  position:relative;
  .ivu-table-small tr td {
    height: 35px !important;
  }
  .ultra-page {
    margin: 8px 20px;
    display: flex;
    justify-content: flex-end;
    font-size: 13px;
  }
  .ultra-page .ivu-select {
    position: relative;
  }

  .ivu-page.mini .ivu-page-total {
    position: absolute;
    left: 20px;
  }
  .ivu-page.mini .ivu-page-item {
    margin: 0 3px;
    background-color: transparent;
    border: 1px solid #2a6893;
  }
  .ivu-page.mini .ivu-page-prev,
  .ivu-page.mini .ivu-page-next {
    background-color: transparent;
    margin: 0 5px;
    color: #50b5ec !important;
  }

  .ivu-icon-ios-arrow-left:before {
    font-size: 20px;
    vertical-align: middle;
  }
  .ivu-icon-ios-arrow-right:before {
    font-size: 20px;
    vertical-align: middle;
  }

  // .ivu-table-cell {
  //   span {
  //     display: inline-block;
  //     overflow: hidden;
  //     text-overflow: ellipsis;
  //     white-space: nowrap;
  //   }
  //   // span:hover {
  //   //   white-space: normal;
  //   // }
  // }
}
</style>