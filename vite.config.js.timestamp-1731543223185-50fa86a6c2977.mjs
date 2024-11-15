// vite.config.js
import { defineConfig } from "file:///C:/Users/Jester%20Salen/Documents/Comission/MEO-CNSC/meo-master/meo-master/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/Users/Jester%20Salen/Documents/Comission/MEO-CNSC/meo-master/meo-master/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///C:/Users/Jester%20Salen/Documents/Comission/MEO-CNSC/meo-master/meo-master/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true,
      hmr: false
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    })
  ],
  optimizeDeps: {
    include: [
      "object-assign",
      "concaveman",
      "rbush",
      "earcut",
      "geojson-rbush",
      "deep-equal",
      "geojson-equality",
      "density-clustering",
      "skmeans"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKZXN0ZXIgU2FsZW5cXFxcRG9jdW1lbnRzXFxcXENvbWlzc2lvblxcXFxNRU8tQ05TQ1xcXFxtZW8tbWFzdGVyXFxcXG1lby1tYXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEplc3RlciBTYWxlblxcXFxEb2N1bWVudHNcXFxcQ29taXNzaW9uXFxcXE1FTy1DTlNDXFxcXG1lby1tYXN0ZXJcXFxcbWVvLW1hc3RlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSmVzdGVyJTIwU2FsZW4vRG9jdW1lbnRzL0NvbWlzc2lvbi9NRU8tQ05TQy9tZW8tbWFzdGVyL21lby1tYXN0ZXIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBsYXJhdmVsIGZyb20gJ2xhcmF2ZWwtdml0ZS1wbHVnaW4nO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbGFyYXZlbCh7XG4gICAgICAgICAgICBpbnB1dDogWydyZXNvdXJjZXMvY3NzL2FwcC5jc3MnLCAncmVzb3VyY2VzL2pzL2FwcC5qcyddLFxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIGhtcjogZmFsc2UsXG4gICAgICAgIH0pLFxuICAgICAgICB2dWUoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Bc3NldFVybHM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAgJ29iamVjdC1hc3NpZ24nLFxuICAgICAgICAgICAgJ2NvbmNhdmVtYW4nLFxuICAgICAgICAgICAgJ3JidXNoJyxcbiAgICAgICAgICAgICdlYXJjdXQnLFxuICAgICAgICAgICAgJ2dlb2pzb24tcmJ1c2gnLFxuICAgICAgICAgICAgJ2RlZXAtZXF1YWwnLFxuICAgICAgICAgICAgJ2dlb2pzb24tZXF1YWxpdHknLFxuICAgICAgICAgICAgJ2RlbnNpdHktY2x1c3RlcmluZycsXG4gICAgICAgICAgICAnc2ttZWFucydcbiAgICAgICAgXSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRaLFNBQVMsb0JBQW9CO0FBQ3piLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFFaEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ0osT0FBTyxDQUFDLHlCQUF5QixxQkFBcUI7QUFBQSxNQUN0RCxTQUFTO0FBQUEsTUFDVCxLQUFLO0FBQUEsSUFDVCxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDTixvQkFBb0I7QUFBQSxVQUNoQixNQUFNO0FBQUEsVUFDTixpQkFBaUI7QUFBQSxRQUNyQjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDVixTQUFTO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
