import React, {useEffect, useState} from "react";
import Tag from "../tags/tag";

import {Icategorie} from "../../domain/domain";
import {getAllCategories} from "../../pages/api/utils/request";

import styles from "./categories-caroussel.module.scss";


type CategorieCarousselProps = {
    categorieId: number
    setCategorieId: (categorieId: number) => void
}

const CategoriesCaroussel = ({setCategorieId, categorieId}: CategorieCarousselProps) => {
    const [categorieList, setCategorieList] = useState<[]>([])
    const [selected, setSelected] = React.useState([]);


    useEffect(() => {
        const getCategorieList = async () => {
            const res = await getAllCategories()
            setCategorieList(res)
        }
        getCategorieList()
    }, [])

    return (

        <div className={styles.postsLayoutCategories}>
            {categorieList.map((categorie: Icategorie) => {
                return (
                    <Tag
                        itemId={categorieId}
                        focus={categorie.id === categorieId ? 'focusBtn' : ''}
                        key={categorie.id}
                        onClick={() => {
                            setCategorieId(categorie.id)
                        }}
                        title={categorie.name}/>
                )
            })}
        </div>

    )
}
export default CategoriesCaroussel