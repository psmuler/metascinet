import { useEffect, useRef } from "react"
import { forceGraph } from "@/utils/d3/forceGraph"

const FirstChart = ({ data, onFocus }) => {
  const svgRef = useRef(null)

  useEffect(() => {
    forceGraph(data, {
      svgEl: svgRef.current,
      nodeId: (d) => d.id,
      nodeGroup: (d) => d.group,
      nodeTitle: (d) => `${d.name}`,
      onFocus: onFocus,
      nodeStrength: -10,
      linkStrokeWidth: (k) => Math.sqrt(k.value),
      height: 300,
      width: 400
    });
  })


  return (
    <>
      <svg ref={svgRef} />
    </>
  )
}

export default FirstChart