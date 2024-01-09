module.exports = {
    project: {
        ios: {},
        android: {}
    },
    assets: ['./src/assets/fonts/', './src/assets/img/'],
    dependencies: {
        "react-native-sqlite-storage": {
            platforms: {
                android: {
                    sourceDir:
                        "../node_modules/react-native-sqlite-storage/platforms/android-native",
                    packageImportPath: "import io.liteglue.SQLitePluginPackage;",
                    packageInstance: "new SQLitePluginPackage()"
                }
            }
        }
    }
}