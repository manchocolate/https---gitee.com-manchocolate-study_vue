<template>
  <div>
    <div><el-button type="primary" @click="handleAdd">添加</el-button> </div>
    <el-table :data="goodsList" style="width: 100%">
      <el-table-column label="商品图片" width="180">
        <template #default="scope">
          <img :src="scope.row.imgurl" width="100" alt="商品图"/>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" prop="title"  />
      <el-table-column label="价格" prop="price"  />
      <el-table-column label="商品库存" prop="stock"  />
      <el-table-column label="商品分类" prop="category.name"  />
      <el-table-column label="商品热卖" width="180">
        <template #default="scope">
          <!-- 默认值为 true和flasse -->
          <el-switch v-model="scope.row.is_hot" :active-value="1" :inactive-value="0" />
        </template>
      </el-table-column>
      <el-table-column label="是否上架" width="180">
        <template #default="scope">
          <!-- 默认值为 true和flasse -->
          <el-switch v-model="scope.row.is_on" :active-value="1" :inactive-value="0" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row.id, scope.row)">
            修改
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div><el-pagination 
      background 
      layout="prev, pager, next" 
      :total="total" 
      :current-page="currentPage" 
      :pagesize="pageSize" 
      @current-change="changePage"
      />
    </div>
    <el-dialog v-model="showModal" title="商品管理" width="30%" :before-close="handleClose" @opened="show()"
      @closed="hidden()">
      <div>
        <el-form :model="goodsForm" label-width="120px" :rules="rules" ref="ruleFormRef">
          <el-form-item label="商品名称" prop="title">
            <el-input v-model="goodsForm.title" placeholder="请输入商品的名称" clearable maxlength="30"/>
          </el-form-item>
          <el-form-item label="商品描述" prop="title2">
            <el-input v-model="goodsForm.title2" placeholder="请输入商品的名称" clearable maxlength="30"/>
          </el-form-item>
          <el-form-item label="市场价格" prop="market_price">
            <el-input v-model="goodsForm.market_price" placeholder="请输入商品的名称" clearable maxlength="30"/>
          </el-form-item>
          <el-form-item label="打折价格" prop="price">
            <el-input v-model="goodsForm.price" placeholder="请输入商品的名称" clearable maxlength="30"/>
          </el-form-item>
          <el-form-item label="库存" prop="stock" >
            <el-input v-model="goodsForm.stock" placeholder="请输入商品的名称" clearable maxlength="30"/>
          </el-form-item>
          <el-form-item label="详细内容">
            <div ref="editor" style="overflow:hidden"></div>
          </el-form-item>
          <el-form-item label="是否是热卖">
            <el-switch v-model="goodsForm.is_hot" :active-value="1" :inactive-value="0" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="handleSumbit">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
    
  </div>
</template>

<script>
import WangEditor from "wangeditor";
export default {
  data() {
    return {
      action: "", // add edit del
      goodsList: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      showModal: false,
      goodsForm: {
        is_on: 1,
        is_hot: 1,
      },
      rules: {
        title: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        title2: [
          { required: true, message: "请输入商品描述", trigger: "blur" },
        ],
        market_price: [
          { required: true, message: "请输入市场价格", trigger: "blur" },
        ],
        price: [{ required: true, message: "请输入打折价格", trigger: "blur" }],
        stock: [{ required: true, message: "请输入库存数量", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      // 获得商品列的接口,拿到新的当前页传递给接口
      let datas = {
        infos: [
          {
            id: 1,
            title: "连衣裙",
            title2: "连衣裙",
            content:
              '<p><img src="https://img.alicdn.com/imgextra/i2/3619780669/O1CN01xB65Lb1GoRkdeucpn_!!3619780669.jpg"/></p><p><img src="https://img.alicdn.com/imgextra/i1/3619780669/O1CN018lIwGy1GoRkco60Tx_!!3619780669.jpg"/></p><p><img src="https://img.alicdn.com/imgextra/i3/3619780669/O1CN01LgNCIk1GoRkWkDhDu_!!3619780669.jpg"/></p><p><img src="https://img.alicdn.com/imgextra/i1/3619780669/O1CN01wys2Hh1GoRkSDbbDA_!!3619780669.jpg"/></p><p><img src="https://img.alicdn.com/imgextra/i3/3619780669/O1CN01Y7IIE31GoRkco7Lco_!!3619780669.jpg"/></p><p><img src="https://img.alicdn.com/imgextra/i3/3619780669/O1CN01p3wl281GoRkZfnfk9_!!3619780669.jpg"/></p><p><img src="https://img.alicdn.com/imgextra/i1/3619780669/O1CN01QUpLdS1GoRkYuuc2B_!!3619780669.jpg"/></p><p><img src="https://img.alicdn.com/imgextra/i3/3619780669/O1CN01nDxc4Y1GoRkXz1oBB_!!3619780669.jpg"/></p><p><img src="https://img.alicdn.com/imgextra/i2/3619780669/O1CN01OedSNy1GoRkQ1AWrN_!!3619780669.jpg"/></p>',
            imgurl:
              "https://oss-ruan.oss-cn-beijing.aliyuncs.com/p1/1667013422416_a65ede3e.png",
            images:
              "https://oss-ruan.oss-cn-beijing.aliyuncs.com/p1/1664259581257_762d0c77.png",
            price: "12.00",
            market_price: "13.00",
            stock: 156,
            is_hot: 1,
            look_num: 0,
            sales: 9,
            is_on: 1,
            order: 0,
            createdAt: "2022-09-27T06:19:58.000Z",
            updatedAt: "2022-11-09T06:53:04.000Z",
            categoryId: 4,
            category: {
              name: "裙子",
            },
          },
          {
            id: 2,
            title: "半身裙",
            title2: "半身裙",
            content: "<p>内容2</p>",
            imgurl:
              "https://oss-ruan.oss-cn-beijing.aliyuncs.com/p1/1664259325549_cf20e6fb.png",
            images:
              "https://oss-ruan.oss-cn-beijing.aliyuncs.com/p1/1664259334418_8cc82844.png",
            price: "99.00",
            market_price: "99.00",
            stock: 194,
            is_hot: 0,
            look_num: 0,
            sales: 2,
            is_on: 1,
            order: 0,
            createdAt: "2022-09-27T06:16:16.000Z",
            updatedAt: "2022-11-09T08:17:19.000Z",
            categoryId: 4,
            category: {
              name: "裙子",
            },
          },
          {
            id: 3,
            title: "裙子",
            title2: "裙子",
            content: "<p>111</p>",
            imgurl:
              "https://oss-ruan.oss-cn-beijing.aliyuncs.com/p1/1664259142222_3ca7cc70.png",
            images:
              "https://oss-ruan.oss-cn-beijing.aliyuncs.com/p1/1664259150658_14c30946.png,https://oss-ruan.oss-cn-beijing.aliyuncs.com/p1/1664259158471_76df6673.png",
            price: "88.00",
            market_price: "88.00",
            stock: 194,
            is_hot: 1,
            look_num: 0,
            sales: 4,
            is_on: 1,
            order: 0,
            createdAt: "2022-09-27T06:13:17.000Z",
            updatedAt: "2022-11-09T06:44:12.000Z",
            categoryId: 4,
            category: {
              name: "裙子",
            },
          },
        ],
        page: 1,
        total: 30,
      };
      this.goodsList = datas.infos;
      this.currentPage = datas.page;
      this.total = datas.total;
    },
    handleEdit(index, row) {
      console.log(index);
      console.log(row.name);
      this.showModal=true;
      this.action="edit";
      Object.assign(this.goodsForm,row); //修改带id 合并后 this.goodsForm带id
    },
    handleDelete(iddgd, row) {
      this.action=="del";
      let index = this.goodsList.findIndex(item=>{
        if(item.id==row.id){
          return true;
        }
        return false;
      })
      this.goodsList.splice(index,1);
      console.log(index);
      console.log(row.name);
      this.$message.success("ok");
      this.action=="";
    },
    changePage(page){
      console.log(page);
      this.currentPage=page;
      // 重新调用接口getGoodlist

    },
    handleAdd(){
      this.showModal=true;
      this.action="add";
    },
    async handleSumbit(){
      this.$refs.ruleFormRef.validate(async (valid)=>{
        //alert("添加成功")
        if(valid){
          this.goodsForm.content = this.instance.txt.html();
          // 验证成功，添加修改接口调用
          let {action,goodsForm} = this;
          let params = {
            ...goodsForm,
            // action

          }
          // 将来是接口
          if(action=="add"){
            this.goodsList.push(params); //没有id
            console.log(params);
          }else if(action=="edit"){
            let index = this.goodsList.findIndex(item=>{
              if(item.id==params.id){
                return true;
              }else{
                return false;
              }
            })
            this.goodsList[index] =params;
          }
        }
        this.handleReset();
        this.$nextTick(()=>{
          this.showModal = false;
        })
        this.$message.success("操作成功")
      })
    },
    //充值方法
    handleReset(){
      this.$refs.ruleFormRef.resetFields();// 异步
      this.goodsForm='';
    },
    handleClose(){
      this.handleReset();//先执行
      this.$nextTick(()=>{
        this.showModal = false;
      })
    },
    show(){
      this.instance = new WangEditor(this.$refs.editor);
      this.instance.create();
      // 修改获得初始值
      if(this.goodsForm.content){
        this.instance.txt.html(this.goodsForm.content);
      }
    },
    hidden(){
      this.instance.destroy();
      this.instance = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>