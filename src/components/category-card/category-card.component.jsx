import './category-card.styles.scss';

function CategoryCard({category}) {

    return (
        <div className='category-container' key={category.id}>
          <div className='background-image' 
            style={{
              backgroundImage: `url(${category.imageUrl})`
            }}
          />
          <div className='category-body-container'>
            <h2>{category.name}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    );
}

export default CategoryCard;