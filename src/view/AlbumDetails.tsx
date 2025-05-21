import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Image, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import BaseStyle from "../constant/BaseStyle";
import Constants from "../constant/Constants";
import ImageSource from "../constant/ImageSource";
import { NavigationType } from "../model/NavigationType";


export const AlbumDetails = () => {
    const route = useRoute();
    const navigation = useNavigation<NavigationType>();
    const params = route.params as { album: Album };

    return (
        <View style={styles.root}>
            <View style={styles.header}>

                <Text style={[BaseStyle.style.subheadingStyle, { width: '100%', textAlign: 'center' }]}>{"Album Details"}</Text>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ position: 'absolute' }}>
                    <Image
                        source={ImageSource.backIcon}
                        style={{ width: Constants.rowGap, height: Constants.rowGap }}
                    />
                </TouchableOpacity>
            </View>

            <Image
                source={{ uri: params.album.artworkUrl100 }}
                style={styles.banner} resizeMode="cover"
            />
            <Text style={BaseStyle.style.subheadingStyle}>
                {params.album.collectionName}
            </Text>
            <Text style={BaseStyle.style.titleStyle}>{params.album.artistName}</Text>
            <Text style={BaseStyle.style.titleStyle}>{"Track Count: " + params.album.trackCount}</Text>
            <Text style={BaseStyle.style.titleStyle}>
                {"Release Date: " + new Date(params.album.releaseDate).toDateString()}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: Constants.marginTop,
        rowGap: Constants.rowGap,
    },
    banner: {
        width: "100%",
        height: Constants.screenHeight * 0.3,
        borderRadius: 12
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        height: Constants.screenHeight * 0.06,
    }
});


