import G2 from "@antv/g2"


// 在vue中可以使用Theme定制不同的主题，
// 引用同一个g2实例，相同的属性可以重复的使用，
// 开发适合白色/暗黑色//等等形式的主题，
// 可能存在的问题，怎样进行换肤处理，
//？？？ 使用不同的框架的痛点是统一样式问题怎样处理;
G2.Global.widthRatio.column = 1 / 3;
//G2.Global.setTheme('dark')

const Util = G2.Util;
const theme =Util.deepMix({
  shape:{
    polygon:{
      stroke:"#213c51",
      lineWidth:1
    },
    hollowPoint:{
      fill:"#21273b",
      lineWidth: 2,
      radius: 3,
    },
    interval:{
      fillOpacity:1
    },
  },
  axis:{
    bottom:{
      labal:{
        textStyle:{
          fill:"#999",
          fontSize:15,
          lineHeight:19,
          textBaseline:'middle'
        }
      }
    },
    right:{
      position:'top',
      title:"y",
      line:{
        lineWidth:2,
        stroke:"red"
      }
    },
    left:{
      position:'left',
      title:'x',
      line:{
        lineWidth:2,
        stroke:"red",
      }
    }


  }
},G2.Global)

G2.Global.setTheme(theme)

G2.Global = {

  legend: {
    html: {
      ['g2-legend']: {
        position: "absolute",
        visibility: "hidden",
        border: "1px solid rgba(43, 45, 55,0.5)",
        backgroundColor: "rgba(43, 45, 55,0.5)",
        boxShadow:"rgba(43, 45, 55,0.5)",
        color: "white",
        opacity: "0.8",
        padding: "5px 15px",
        transition: "top 200ms,left 200ms"
      },
    }
  }
}


//shape

// const Shape = G2.Shape;
// const shapeObj = Shape.registerShap('interval','triangle',{
//     getPoints(pointInfo){
//         const x = pointInfo.x;
//         const y = pointInfo.y;
//         const y0 = pointInfo.y0;
//         const width = pointInfo.width
//         return [
//             {x:x-width/2,y:y0},
//             {x:x,y:y},
//             {x:x+width/2,y:y0}
//         ]

//     },
//     draw(cfg,group){
//         const points = this.parsePoints(cfg.points);
//         const polygon = group.addShape('polygon',{
//             attrs:{
//                 points:[
//                     [ points[0].x, points[0].y ],
//                     [ points[1].x, points[1].y ],
//                     [ points[2].x, points[2].y ]
//                 ],
//                 fill:cfg.color
//             }
//         });
//         return polygon
//     }
// })



export default G2;
