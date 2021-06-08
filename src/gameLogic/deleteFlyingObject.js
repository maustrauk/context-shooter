const deleteFlyingObject = (flyingObjectsContext) => {
    const now = (new Date()).getTime();
    const lastObjectCreatedAt = flyingObjectsContext.lastObjectCreatedAt;
    const filteredObjects = [...flyingObjectsContext.flyingObjects].filter(object => ((now - object.createdAt) < 3000));
    return flyingObjectsContext.setFlyingObjectContext(filteredObjects, lastObjectCreatedAt);
};

export default deleteFlyingObject;