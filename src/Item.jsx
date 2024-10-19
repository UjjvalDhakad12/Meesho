import React, { useState } from "react";
import "./Item.css";

const menuItems = [
    {
        title: "Women Ethnic",
        subMenu: [
            { category: "All Women Ethnic", items: ["View All"] },
            { category: "Sarees", items: ["All Sarees", "Silk Sarees", "Cotton Silk Sarees", "Cotton Sarees", "Georgette Sarees", "Chiffon Sarees", "Satin Sarees", "Embroidered Sarees"] },
            { category: "Kurtis", items: ["All Kurtis", "Anarkali Kurtis", "Rayon Kurtis", "Cotton Kurtis", "Embroidered Kurtis"] },
            { category: "Kurta Sets", items: ["All Kurta Sets"] },
            { category: "Suits & Dress Material", items: ["All Suits & Dress Material", "Cotton Suits", "Embroidered Suits", "Chanderi Suits"] },
            { category: "Other Ethnic", items: ["Blouses", "Dupattas", "Lehanga", "Gown", "Ethnic Bottomwear"] },
        ],
    },
    {
        title: "Women Western",
        subMenu: [{ category: "All Women Western", items: ["View All"] }],
    },
    {
        title: "Man",
        subMenu: [{ category: "All Women Western", items: ["View All"] }],
    },
    {
        title: "Kids",
        subMenu: [{ category: "All Women Western", items: ["View All"] }],
    },
    {
        title: "Home & Kitchen",
        subMenu: [{ category: "All Women Western", items: ["View All"] }],
    },
    {
        title: "Beauty & Health",
        subMenu: [{ category: "All Women Western", items: ["View All"] }],
    },
    {
        title: "Jewellery & Accessories",
        subMenu: [{ category: "All Women Western", items: ["View All"] }],
    },
    {
        title: "Bags & Footwear",
        subMenu: [{ category: "All Women Western", items: ["View All"] }],
    },
    {
        title: "Electronics",
        subMenu: [{ category: "All Women Western", items: ["View All"] }],
    },
];

const DropdownMenu = () => {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    return (
        <nav className="navbar">
            <ul className="nav-list">
                {menuItems.map(({ title, subMenu }, index) => (
                    <li
                        key={index}
                        className="nav-item"
                        onMouseEnter={() => setHoveredMenu(title)}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        <span>{title}</span>
                        {hoveredMenu === title && (
                            <div className="dropdown-content">
                                <div className="dropdown-grid">
                                    {subMenu.map(({ category, items }, subIndex) => (
                                        <div className="dropdown-column" key={subIndex}>
                                            <h3>{category}</h3>
                                            <ul>
                                                {items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <a href={`#${item.toLowerCase().replace(/\s/g, "-")}`}>{item}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <hr/>
        </nav>
    );
};

export default DropdownMenu;
