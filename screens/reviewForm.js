import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import { globalStyles } from '../styles/globalStyles'
import * as yup from 'yup'

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required()
        .test('isRatingCorrect', 'Rating must be a number between (1-5)', (val) => {
            return parseInt(val) > 0 && parseInt(val) < 6
        })


})

const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    addReview(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Ratings (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <Button title='submit' color='maroon' onPress={props.handleSubmit} />
                    </View>
                )}

            </Formik>
        </View>

    )
}

export default ReviewForm

const styles = StyleSheet.create({})
