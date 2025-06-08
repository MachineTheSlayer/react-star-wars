import { useState, useEffect } from 'react';
import { getApiResourse } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';

import styles from './PeoplePage.module.css';

const PeoplePage = () => {
    const [people, setPeople] = useState(null);

    const getResourse = async (url) => {
        const res = await getApiResourse(url);
       
        const peopleList = res.results.map(({name, url}) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)

            return {
                id,
                name,
                img
            }
        })

        setPeople(peopleList);
    }

    useEffect(() => {
        getResourse(API_PEOPLE);
    }, [])

    return (
        <>
            {people && <PeopleList people={people} />}       
        </>
    )
}

export default PeoplePage;