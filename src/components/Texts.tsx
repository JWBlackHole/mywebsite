export const HL = ({children}: {children: any}) => {
    return (
      <span style={{
        fontWeight: "bold",
        textDecoration           : "underline solid #d134fdff",
        textDecorationThickness  : "3px",
        WebkitTextDecorationColor: "#d134fdff",
        WebkitTextDecorationLine : "underline",
        WebkitTextDecorationStyle: "solid"
      }}>{children}</span>
    )
}

export const Title = ({children}: {children: any}) => {
    return (
      <span
      style={{
        fontWeight: "800",
        fontSize: "clamp(2rem , 6vw, 3rem)"
      }}
      >{children}</span>
    );
}

export const SubTitle = ({children}: {children: any}) => {
    return (
      <span
      style={{
        fontWeight: "600",
        fontSize: "clamp(1.6rem , 5vw, 2rem)"
      }}
      >{children}</span>
    );
}

export const RegularText = ({children}: {children: any}) => {
  return (
    <span
    style={{
      fontWeight: "500",
      fontSize: "clamp(1.2rem , 3vw, 1.5rem)"
    }}
    >{children}</span>
  );
}

export const Supplement = ({children}: {children: any}) => {
  return (
    <span
    style={{
      color: "#888888",
      fontWeight: "400",
      fontSize: "clamp(1rem , 2.5vw, 1.2rem)"
    }}
    >{children}</span>
  );
}