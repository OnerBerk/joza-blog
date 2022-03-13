import React, {useEffect, useState} from "react";
import Tag from "../tags/tag";

import {Icategorie} from "../../domain/domain";
import {getAllCategories} from "../../pages/api/utils/request";

import styles from "./categories-caroussel.module.scss";
import getWidth from "../../utils/getWidth";
import {faHome, faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type CategorieCarousselProps = {
    categorieId: number
    setCategorieId: (categorieId: number) => void
}

const CategoriesCaroussel = ({setCategorieId, categorieId}: CategorieCarousselProps) => {
    const [categorieList, setCategorieList] = useState<[]>([])
    const [openDropdown, setOpenDropDown] = useState<boolean>(false)
    const width = getWidth()

    useEffect(() => {
        const getCategorieList = async () => {
            const res = await getAllCategories()
            setCategorieList(res)
        }
        getCategorieList()
    }, [])

    return (
        <>{width > 550
            ?
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
            :
            <>
                <div
                    onClick={() => setOpenDropDown(!openDropdown)}
                    className={styles.hamburger}>
                    <div>Categories
                        {openDropdown
                            ? <FontAwesomeIcon icon={faAngleUp}/>

                            : <FontAwesomeIcon icon={faAngleDown}/>
                        }
                    </div>
                </div>
                {
                    openDropdown &&
                    <div className={styles.dropdown}>
                        {categorieList.map((categorie: Icategorie) => {
                            return (
                                <Tag
                                    itemId={categorieId}
                                    focus={categorie.id === categorieId ? 'focusBtn' : ''}
                                    key={categorie.id}
                                    onClick={() => {
                                        setOpenDropDown(false)
                                        setCategorieId(categorie.id)
                                    }}
                                    title={categorie.name}/>
                            )
                        })}
                    </div>
                }
            </>

        }

        </>


    )
}
export default CategoriesCaroussel