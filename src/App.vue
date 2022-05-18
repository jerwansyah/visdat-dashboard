<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<script>
export default {
  data() {
    return {
      dashboard1:
        "<div class='tableauPlaceholder' id='viz1652669285251' style='position: relative'><noscript><a href='#'><img alt='Persebaran Lokasi Pembajakan Kapal Laut ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16525268855300&#47;Dashboard1&#47;1_rss.png' style='border: none'/></a></noscript><object class='tableauViz' style='display: none'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /><param name='embed_code_version' value='3' /><param name='site_root' value='' /><param name='name' value='Book1_16525268855300&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16525268855300&#47;Dashboard1&#47;1.png'/><param name='animate_transition' value='yes' /> <param name='display_static_image' value='yes' /> <param name='display_spinner' value='yes' /> <param name='display_overlay' value='yes' /> <param name='display_count' value='yes' /> <param name='language' value='en-US' /> </object> </div>",
      dashboard2:
        "<div class='tableauPlaceholder' id='viz1652871904417' style='position: relative'><noscript><a href='#'><img alt='Pembajakan Kapal Laut Per Region Tahun 1993-2020 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16525268855300&#47;Dashboard2&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display: none'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /><param name='embed_code_version' value='3' /><param name='site_root' value='' /><param name='name' value='Book1_16525268855300&#47;Dashboard2' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16525268855300&#47;Dashboard2&#47;1.png'/> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /> <param name='display_count' value='yes' /><param name='language' value='en-US' /><object></div>",
      dashboard3:
        "<div class='tableauPlaceholder' id='viz1652872081415' style='position: relative'><noscript><a href='#'><img alt='Jarak Pembajakan Kapal Laut Ke Pesisir Pantai ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16525268855300&#47;Dashboard3&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display: none'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /><param name='embed_code_version' value='3' /><param name='site_root' value='' /><param name='name' value='Book1_16525268855300&#47;Dashboard3' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_16525268855300&#47;Dashboard3&#47;1.png'/><param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>",
    };
  },
  mounted() {
    let script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://prod-apsoutheast-a.online.tableau.com/javascripts/api/viz_v1.js"
    );
    document.head.appendChild(script);

    var divElement = document.querySelectorAll("[id^='viz16528']");
    for (const element of divElement) {
      let vizElement = element.getElementsByTagName("object")[0];
      let scriptElement = document.createElement("script");
      scriptElement.src =
        "https://public.tableau.com/javascripts/api/viz_v1.js";
      vizElement.parentNode.insertBefore(scriptElement, vizElement);

      vizElement.style.width = Math.round(screen.width / 2) - 24 + "px";
      vizElement.style.height = Math.round(827 / 2) + "px";
    }

    divElement = document.getElementById("viz1652669285251");
    var vizElement = divElement.getElementsByTagName("object")[0];
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    vizElement.style.width = Math.round(screen.width / 2) - 24 + "px";
    vizElement.style.height = "827px";
  },
};
</script>

<template>
  <div class="flex justify-between h-16 bg-slate-200 px-10 mb-3">
    <h1 class="text-2xl font-bold self-center">
      Pembajakan Kapal Laut Tahun 1993-2020
    </h1>
  </div>
  <div class="grid grid-rows-1 grid-flow-col gap-2 max-h-[827px]">
    <div v-html="dashboard1"></div>
    <div class="grid grid-rows-2 max-h-[827px]">
      <div v-html="dashboard2"></div>
      <div v-html="dashboard3"></div>
    </div>
  </div>
  <div class="flex gap-4 h-16 bg-slate-200 px-10 fixed bottom-0 left-0 right-0">
    <h1 class="text-xl self-center">Links</h1>
    <div class="flex self-center gap-4">
      <a
        class="bg-slate-300 py-2 px-3 rounded-xl hover:bg-slate-400 hover:duration-300"
        href="https://public.tableau.com/app/profile/amara.hanieka/viz/Book1_16525268855300/Dashboard1"
        >Bubble Plot Map</a
      >
      <a
        class="bg-slate-300 py-2 px-3 rounded-xl hover:bg-slate-400 hover:duration-300"
        href="https://public.tableau.com/app/profile/amara.hanieka/viz/Book1_16525268855300/Dashboard2"
        >Line Chart</a
      >
      <a
        class="bg-slate-300 py-2 px-3 rounded-xl hover:bg-slate-400 hover:duration-300"
        href="https://public.tableau.com/app/profile/amara.hanieka/viz/Book1_16525268855300/Dashboard3s"
        >Histogram</a
      >
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(241 245 249);
  height: 100vh;
}
</style>
