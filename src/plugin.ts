const { selection } = figma.currentPage

function hasValidSelection(nodes) {
  return !(!nodes || nodes.length === 0)
}

const settings = [
  { format: "PNG", suffix: "-20@1x", constraint: { type: "WIDTH", value: 20 }},
  { format: "PNG", suffix: "-20@2x", constraint: { type: "WIDTH", value: 40 }},
  { format: "PNG", suffix: "-20@3x", constraint: { type: "WIDTH", value: 60 }},
  { format: "PNG", suffix: "-29@1x", constraint: { type: "WIDTH", value: 29 }},
  { format: "PNG", suffix: "-29@2x", constraint: { type: "WIDTH", value: 58 }},
  { format: "PNG", suffix: "-29@3x", constraint: { type: "WIDTH", value: 87 }},
  { format: "PNG", suffix: "-40@1x", constraint: { type: "WIDTH", value: 40 }},
  { format: "PNG", suffix: "-40@2x", constraint: { type: "WIDTH", value: 80 }},
  { format: "PNG", suffix: "-40@3x", constraint: { type: "WIDTH", value: 120 }},
  { format: "PNG", suffix: "-60@2x", constraint: { type: "WIDTH", value: 120 }},
  { format: "PNG", suffix: "-60@3x", constraint: { type: "WIDTH", value: 180 }},
  { format: "PNG", suffix: "-76@1x", constraint: { type: "WIDTH", value: 76 }},
  { format: "PNG", suffix: "-76@2x", constraint: { type: "WIDTH", value: 152 }},
  { format: "PNG", suffix: "-83.5@2x", constraint: { type: "WIDTH", value: 167 }},
  { format: "PNG", suffix: "-1024@1x", constraint: { type: "WIDTH", value: 1024 }},
]

async function main(nodes): Promise<string> {
  if (!hasValidSelection(nodes)) return Promise.resolve('No valid selection')

  for (let node of nodes) {
    node.exportSettings = settings
  }

  return Promise.resolve('Done!')
}

main(selection).then((res) => figma.closePlugin(res))