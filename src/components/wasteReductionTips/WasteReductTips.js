import {FlatList, Text, View, StyleSheet} from "react-native";

function TipSection({tip}) {
    return (
        <View style={styles.tipContainer}>
            <Text>Hello</Text>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipText}>{tip.tip}</Text>
        </View>
    );
}

export default function WasteReductTips() {

    const tips = [
        {
            "key": 1,
            "title": "Use Reusable Bags",
            "tip": "Use reusable bags when shopping to reduce plastic bag waste."
        },
        {
            "key": 2,
            "title": "Bring a Reusable Water Bottle",
            "tip": "Bring a reusable water bottle to avoid single-use plastic bottles."
        },
        {
            "key": 3,
            "title": "Minimize Packaging",
            "tip": "Opt for products with minimal packaging to reduce overall waste."
        },
        {
            "key": 4,
            "title": "Recycle Properly",
            "tip": "Recycle paper, cardboard, glass, and plastic items in designated bins."
        },
        {
            "key": 5,
            "title": "Compost Organic Waste",
            "tip": "Compost organic waste like food scraps to divert it from landfills."
        },
        {
            "key": 6,
            "title": "Choose Durable Products",
            "tip": "Choose products with longer lifespans to reduce frequent replacements."
        },
        {
            "key": 7,
            "title": "Donate or Sell Items",
            "tip": "Donate or sell items instead of discarding them to extend their usefulness."
        },
        {
            "key": 8,
            "title": "Repurpose and Upcycle",
            "tip": "Repurpose or upcycle old items into new and useful creations."
        },
        {
            "key": 9,
            "title": "Say No to Single-Use Plastics",
            "tip": "Say no to single-use plastics, such as straws and utensils, whenever possible."
        },
        {
            "key": 10,
            "title": "Educate Yourself on Recycling",
            "tip": "Educate yourself on local recycling programs and guidelines for proper disposal."
        }
    ];

    return (
        <View>
            <Text>Waste Reduction Tips</Text>
            <FlatList data={tips}
                      renderItem={({tip}) => (<TipSection tip={tip}/>)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    tipContainer: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    tipTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    tipText: {
        fontSize: 14,
    },
});
