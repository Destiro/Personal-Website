import {View} from "react-native-web";
import Colours from "../config/Colours";
import {StyleSheet, Text} from "react-native";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import useWindowDimensions from "../config/Display";

const tabs = [
    {
        name: 'About',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Experience',
        to: '/experience',
        active: 'experience'
    },
    {
        name: 'CdB',
        to: '/',
        active: 'home'
    },
    {
        name: 'Projects',
        to: '/projects',
        active: 'projects'
    },
    {
        name: 'Contact',
        to: '/contact',
        active: 'contact'
    },
]

export default function NavBar() {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
    const { width } = useWindowDimensions();

    return(
        <View style={styles.nav_back}>
            {tabs.map((value, index) => (
            <View key={value.name+index} styles={value.name === "CdB" ? styles.home_tab : value.active === active ? styles.tab_selected : styles.tab_unselected}>
                <Link to={value.to} onClick={() => setActive(value.active)} style={width > 900 ? styles.text_big : styles.text_small}> {value.name} </Link>
            </View>
            ))}
        </View>
    )
}




const styles = StyleSheet.create({
    nav_back: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80px',
        backgroundColor: Colours.light_grey,
    },
    home_tab: {
        height: '80px',
        backgroundColor: Colours.red_primary
    },
    tab_unselected: {
        height: '80px',
        backgroundColor: Colours.yellow_primary
    },
    tab_selected: {
        height: '80px',
        width: '100px',
        padding: 100,
        flex: 1,
        color: Colours.red_primary,
        textColor: Colours.red_primary,
        marginHorizontal: '1rem',
        backgroundColor: Colours.green_primary
    },
    text_small: {
        fontWeight: '400',
        fontSize: '1.1rem',
        margin: '1rem'
    },
    text_big: {
        fontWeight: '400',
        fontSize: '1.3rem',
        margin: '2.5rem'
    }
});
