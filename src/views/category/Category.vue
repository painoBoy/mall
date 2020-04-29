<!--
 * @Author: your name
 * @Date: 2020-04-29 00:10:31
 * @LastEditTime: 2020-04-29 00:11:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-mall/src/views/category/Category.vue
 -->

<template>
  <div id="category">
    <div class="wrapper" ref="aaa">
      <ul class="content">
        <li>这是展示数据1</li>
        <li>这是展示数据2</li>
        <li>这是展示数据3</li>
        <li>这是展示数据4</li>
        <li>这是展示数据5</li>
        <li>这是展示数据6</li>
        <li>这是展示数据7</li>
        <li>这是展示数据8</li>
        <li>这是展示数据9</li>
        <li>这是展示数据10</li>
        <li>这是展示数据11</li>
        <li>这是展示数据12</li>
        <li>这是展示数据13</li>
        <li>这是展示数据14</li>
        <li>这是展示数据15</li>
        <li>这是展示数据16</li>
        <li>这是展示数据17</li>
        <li>这是展示数据18</li>
        <li>这是展示数据19</li>
        <li>这是展示数据20</li>
        <li>这是展示数据21</li>
        <li>这是展示数据22</li>
        <li>这是展示数据23</li>
        <li>这是展示数据24</li>
        <li>这是展示数据25</li>
        <li>这是展示数据26</li>
        <li>这是展示数据27</li>
        <li>这是展示数据28</li>
        <li>这是展示数据29</li>
        <li>这是展示数据30</li>
        <li>这是展示数据31</li>
        <li>这是展示数据32</li>
        <li>这是展示数据33</li>
        <li>这是展示数据34</li>
        <li>这是展示数据35</li>
        <li>这是展示数据36</li>
        <li>这是展示数据37</li>
        <li>这是展示数据38</li>
        <li>这是展示数据39</li>
        <li>这是展示数据40</li>
        <li>这是展示数据41</li>
        <li>这是展示数据42</li>
        <li>这是展示数据43</li>
        <li>这是展示数据44</li>
        <li>这是展示数据45</li>
        <li>这是展示数据46</li>
        <li>这是展示数据47</li>
        <li>这是展示数据48</li>
        <li>这是展示数据49</li>
        <li>这是展示数据50</li>
        <li>这是展示数据51</li>
        <li>这是展示数据52</li>
        <li>这是展示数据53</li>
        <li>这是展示数据54</li>
        <li>这是展示数据55</li>
        <li>这是展示数据56</li>
        <li>这是展示数据57</li>
        <li>这是展示数据58</li>
        <li>这是展示数据59</li>
        <li>这是展示数据60</li>
        <li>这是展示数据61</li>
        <li>这是展示数据62</li>
        <li>这是展示数据63</li>
        <li>这是展示数据64</li>
        <li>这是展示数据65</li>
        <li>这是展示数据66</li>
        <li>这是展示数据67</li>
        <li>这是展示数据68</li>
        <li>这是展示数据69</li>
        <li>这是展示数据70</li>
        <li>这是展示数据71</li>
        <li>这是展示数据72</li>
        <li>这是展示数据73</li>
        <li>这是展示数据74</li>
        <li>这是展示数据75</li>
        <li>这是展示数据76</li>
        <li>这是展示数据77</li>
        <li>这是展示数据78</li>
        <li>这是展示数据79</li>
        <li>这是展示数据80</li>
        <li>这是展示数据81</li>
        <li>这是展示数据82</li>
        <li>这是展示数据83</li>
        <li>这是展示数据84</li>
        <li>这是展示数据85</li>
        <li>这是展示数据86</li>
        <li>这是展示数据87</li>
        <li>这是展示数据88</li>
        <li>这是展示数据89</li>
        <li>这是展示数据90</li>
        <li>这是展示数据91</li>
        <li>这是展示数据92</li>
        <li>这是展示数据93</li>
        <li>这是展示数据94</li>
        <li>这是展示数据95</li>
        <li>这是展示数据96</li>
        <li>这是展示数据97</li>
        <li>这是展示数据98</li>
        <li>这是展示数据99</li>
        <li>这是展示数据100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  components: {
    BScroll,
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    console.log(document.querySelector(".wrapper"));
    this.scroll = new BScroll(this.$refs.aaa,{
      pullUpLoad: true
    });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: red;
  height: 200px;
  overflow: hidden;
}
</style>
