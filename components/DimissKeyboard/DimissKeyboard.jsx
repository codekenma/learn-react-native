import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'

const DismissKeyboard = (Component) => {
    return ({ children, ...props}) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Component { ...props}>
                {children}
            </Component>

        </TouchableWithoutFeedback>
    )
}
const DismissKeyboardView = DismissKeyboard(View)

export default DismissKeyboardView;