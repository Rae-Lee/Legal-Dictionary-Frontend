 <template>
 <!-- ======= Works Section ======= -->
<section class="section  site-filter" v-if="getRouteName !== 'login' && getRouteName !== 'register' && getRouteName !== 'adminLogin' && role !== 'admin'">
      <div class="work-place">
        <div class="row mb-5 align-items-center d-flex" >
           <div class="col-md-12 col-lg-6 mb-4 mb-lg-0 sign" data-aos="fade-up">
               <h2 class="slogan">寫訴狀的最佳幫手！</h2>
               <p class="mb-0 description">查詢用語相關法條和裁判</p>
             </div>
          <div class="col-md-12 col-lg-6 text-start text-lg-end tabs" data-aos="fade-up" data-aos-delay="100">
            <div id="filters" class="filters">
              <router-link to="/home" class="px-3">首頁</router-link>
              <router-link :to="{
                name: 'favorites', params: {
                  id: currentUser.id
                }
              }" class="px-3" >我的最愛</router-link>
             <router-link :to="{
                   name: 'notes', params: {
                     id: currentUser.id
                   }
                 }" >我的筆記</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End  Works Section -->
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['currentUser', 'role', 'isAuthenticated']),
    getRouteName () {
      return this.$route.name
    }
  }
}
</script>
<style>
/* .work-place{
  background: #fff;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 0px;
} */
.sign{
  margin-left:100px;
}
.slogan{
  color:#535353;
  font-size:25px;
}
.tabs{
  margin-left:650px;
}
.site-filter{
  margin-top:0px;
  font-size:18px;
  color:#535353;
  font-weight:bold;
}
.filters a {
  text-decoration: none;
  color: #535353;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

.filters a:hover,
.filters a:focus,
.filters a:active {
  text-decoration: none;
}

.filters a:hover:before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 1px;
  background-color: #535353;
}

.filters a.active {
  color: #535353;
}

.filters a.active:before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 1px;
  background-color: #535353;
}
</style>
