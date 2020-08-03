// swift-tools-version:5.3

import PackageDescription

let package = Package(
  name: "HyperhooksCore",
  products: [
    .library(
      name: "HyperhooksCore",
      targets: ["HyperhooksCore"]),
  ],
  targets: [
    .target(
      name: "HyperhooksCore",
      path: "swift",
      resources: [
        .copy("hyperhooks-core.js")
      ]
    ),
  ]
)
