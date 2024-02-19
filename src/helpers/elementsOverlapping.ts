export const areElementsOverlapping = (element1Ref: any, element2Ref: any) => {
    try{
        if (element1Ref && element2Ref) {
            const element1Rect = element1Ref.getBoundingClientRect();
            const element2Rect = element2Ref.getBoundingClientRect();

            // Проверяем, пересекаются ли прямоугольники двух элементов (element1 и element2)
            const isOverlapping = !(
            element1Rect.right < element2Rect.left ||
            element1Rect.left > element2Rect.right ||
            element1Rect.bottom < element2Rect.top ||
            element1Rect.top > element2Rect.bottom
            );

            if (isOverlapping) {
                return true
            } else {
                return false
            }
        }
    }
    catch{
        return null
    }
};
