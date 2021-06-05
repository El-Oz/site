jQuery(document).ready(function () {
    var productCategoryList = jQuery(".product-categories"),
        listCatParnt = productCategoryList.find(".cat-parent"),
        isChildCat = productCategoryList.find(".current-cat-parent")[0] ? 1 : 0,
        listCurentCatParent = isChildCat ?
            productCategoryList.find(".current-cat-parent") :
            productCategoryList.find(".current-cat"),
        listCatChild = listCatParnt.find(".children"), style;

    style = "<style>";
    style += ` 
      .product-categories .children {
        overflow: hidden;
        transition: all 400ms ease;
      }
    `;

    jQuery.each(listCatChild, function (i, el) {
        style += `
        .product-categories .children:nth-of-type(${i + 1}) {
            height: ${jQuery(el).outerHeight()}px;
        }`;
    });

    style += `.product-categories .children.collapsed {
        height: 0;
        transition: height 400ms ease;
      }
    </style>`;

    jQuery('head').append(style);

    listCatChild.addClass('collapsed');

    if (isChildCat)
        listCurentCatParent.find('.children').removeClass('collapsed');

    listCatParnt.on("mouseenter", function () {
        listCatChild.addClass('collapsed');
        jQuery(this).find('.children').removeClass('collapsed');
    });

    listCatParnt.on("mouseleave", function () {
        listCatChild.addClass('collapsed');
        if (isChildCat)
            listCurentCatParent.find('.children').removeClass('collapsed');
    });
});